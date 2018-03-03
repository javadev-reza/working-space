package com.microservice.service.impl;

import com.microservice.model.T_ActiveUser;
import com.microservice.model.T_LoginUser;
import com.microservice.model.dto.T_LoginUserDto;
import com.microservice.repository.ActiveUserRepository;
import com.microservice.repository.LoginUserRepository;
import com.microservice.security.model.UserAuthentication;
import com.microservice.security.service.AuthenticateAdapter;
import com.microservice.security.service.impl.BaseServiceImpl;
import com.microservice.service.AuthService;
import com.microservice.util.CommonUtil;
import com.microservice.util.PasswordUtil;
import com.microservice.util.RestExceptionUtil.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthServiceImpl extends BaseServiceImpl implements AuthService {

    @Autowired
    private LoginUserRepository loginUserRepository;

    @Autowired
    private AuthenticateAdapter authenticateAdapter;

    @Autowired
    private ActiveUserRepository activeUserRepository;

    @Transactional(readOnly = false)
    public T_ActiveUser statusActive(String authCode){
        T_ActiveUser activeUser = activeUserRepository.findAllByLoginUserCode(authCode);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNullOrEmpty(activeUser)){
            activeUser = new T_ActiveUser();
            //----------------------------------------------------------------------------------------------------------
            activeUser.setStatusEnabled(true);
            //----------------------------------------------------------------------------------------------------------
            activeUser.setActiveStatus(false);
            //----------------------------------------------------------------------------------------------------------
            activeUser.setLoginUserCode(authCode);
            //----------------------------------------------------------------------------------------------------------
            activeUser = activeUserRepository.save(activeUser);
        }
        return activeUser;
    }

    @Override
    @Transactional(readOnly = false)
    public Map signIn( HttpServletResponse response, T_LoginUserDto dto){
        Map<String, Object> result = new HashMap<>();
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNullOrEmpty(dto.getUserName())){
            throw new BadRequestException("Please fill in email");
        } else if(CommonUtil.isNullOrEmpty(dto.getPassword())){
            throw new BadRequestException("Please fill in password");
        } else if(CommonUtil.isNullOrEmpty(dto.getUserName()) && CommonUtil.isNullOrEmpty(dto.getPassword())){
            throw new BadRequestException("Please fill in email and password");
        }
        //--------------------------------------------------------------------------------------------------------------
        T_LoginUser loginUser = loginUserRepository.findByUserNameAndStatusEnabled(dto.getUserName(), true);
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(loginUser)){
            //----------------------------------------------------------------------------------------------------------
            if (new PasswordUtil().isPasswordEqual(dto.getPassword(), loginUser.getPassword())){

                T_ActiveUser activeUser = statusActive(loginUser.getCode());

                if (!activeUser.getActiveStatus()) {
                    GrantedAuthority authority = new SimpleGrantedAuthority("USER");
                    //--------------------------------------------------------------------------------------------------
                    Boolean isValidToken = authenticateAdapter.tokenGeneratorAdapter(response, new UserAuthentication(
                            new User(loginUser.getUserName(), loginUser.getPassword(), Arrays.asList(authority))));

                    if (isValidToken) {
                        result.put("authCode", loginUser.getCode());
                        //----------------------------------------------------------------------------------------------
                        activeUser.setActiveStatus(true);
                        activeUserRepository.save(activeUser);
                    }
                } else{
                    throw new ForbiddenException("User does not have access privileges");
                }
            } else{
                throw new ForbiddenException("This password is incorrect");
            }

        } else{
            throw new NotFoundException("You have not account");
        }
        //--------------------------------------------------------------------------------------------------------------
        return result;
    }

    @Override
    @Transactional(readOnly = false)
    public Map signOut(String authCode){
        Map<String, Object> result = new HashMap<>();
        //--------------------------------------------------------------------------------------------------------------
        T_ActiveUser activeUser = statusActive(authCode);
        //--------------------------------------------------------------------------------------------------------------
        if (activeUser.getActiveStatus()) {
            activeUser.setActiveStatus(false);
            //----------------------------------------------------------------------------------------------------------
            T_ActiveUser activeUserResult = activeUserRepository.save(activeUser);
            //----------------------------------------------------------------------------------------------------------
            if(CommonUtil.isNotNullOrEmpty(activeUserResult)) {
                result.put("authCode", activeUserResult.getLoginUserCode());
            }
        } else{
            throw new ForbiddenException("User does not have access privileges");
        }
        //--------------------------------------------------------------------------------------------------------------
        return result;
    }
}

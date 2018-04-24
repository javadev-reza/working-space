package com.microservice.implement;

import com.microservice.dto.custom.SignInDto;
import com.microservice.model.*;
import com.microservice.repository.*;
import com.microservice.security.TokenHandler;
import com.microservice.security.UserAuthentication;
import com.microservice.security.AuthenticateAdapter;
import com.microservice.service.AuthenticationService;
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
public class AuthenticationServiceImpl extends BaseServiceImpl implements AuthenticationService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthenticateAdapter authenticateAdapter;

    @Autowired
    private ActiveUserRepo activeUserRepo;

    @Transactional(readOnly = false)
    public T_ActiveUser statusActive(String userCode){
        T_ActiveUser activeUser = activeUserRepo.findAllByStatusEnabledAndUserCode(true, userCode);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNullOrEmpty(activeUser)){
            activeUser = new T_ActiveUser();
            //----------------------------------------------------------------------------------------------------------
            activeUser.setStatusEnabled(true);
            //----------------------------------------------------------------------------------------------------------
            activeUser.setActiveStatus(false);
            //----------------------------------------------------------------------------------------------------------
            activeUser.setUserCode(userCode);
            //----------------------------------------------------------------------------------------------------------
            activeUser = activeUserRepo.save(activeUser);
        }
        return activeUser;
    }

    public Map setAuthResult( T_User user, T_ActiveUser activeUser, UserAuthentication authentication){

        activeUser.setActiveStatus(true);
        //--------------------------------------------------------------------------------------------------------------
        statusActive(activeUser.getUserCode());
        //--------------------------------------------------------------------------------------------------------------
        Map<String, Object> userData = setResult(user);
        //--------------------------------------------------------------------------------------------------------------
        Map<String, Object> rerult = (Map<String, Object>) userData.get("result");
        //--------------------------------------------------------------------------------------------------------------
        rerult.put("authorization", new TokenHandler().tokenGenerator(authentication.getDetails()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(rerult);
    }

    @Override
    @Transactional(readOnly = false)
    public Map signIn(HttpServletResponse response, SignInDto dto){
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
        T_User user = userRepo.findByStatusEnabledAndUserName(true, dto.getUserName());
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(user)){
            //----------------------------------------------------------------------------------------------------------
            if (new PasswordUtil().isPasswordEqual(dto.getPassword(), user.getPassword())){
                GrantedAuthority authority = new SimpleGrantedAuthority("USER");
                UserAuthentication authentication = new UserAuthentication(new User(user.getUserName(), user.getPassword(), Arrays.asList(authority)));

                if(user.getCode().equalsIgnoreCase("SU-8181619fa61501619fbfc4ce0001")){
                    T_ActiveUser activeUser = statusActive(user.getCode());
                    //--------------------------------------------------------------------------------------------------
                    if (activeUser.getActiveStatus() || !activeUser.getActiveStatus()) {
                        //----------------------------------------------------------------------------------------------
                        Boolean isValidToken = authenticateAdapter.tokenGeneratorAdapter(response, authentication);
                        //----------------------------------------------------------------------------------------------
                        if (isValidToken) {
                            result = setAuthResult(user, activeUser, authentication);;
                        }
                    }
                } else {
                    T_ActiveUser activeUser = statusActive(user.getCode());
                    //--------------------------------------------------------------------------------------------------
                    if (!activeUser.getActiveStatus()) {
                        //----------------------------------------------------------------------------------------------
                        Boolean isValidToken = authenticateAdapter.tokenGeneratorAdapter(response, authentication);
                        //----------------------------------------------------------------------------------------------
                        if (isValidToken) {
                            result = setAuthResult(user, activeUser, authentication);
                        }
                    } else {
                        throw new ForbiddenException("User does not have access privileges");
                    }
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
    public Map signOut(String userCode){
        //--------------------------------------------------------------------------------------------------------------
        T_ActiveUser activeUser = statusActive(userCode);
        //--------------------------------------------------------------------------------------------------------------
        if (activeUser.getActiveStatus()) {
            //----------------------------------------------------------------------------------------------------------
            activeUser.setActiveStatus(false);
            //----------------------------------------------------------------------------------------------------------
            activeUser = activeUserRepo.save(activeUser);
            //----------------------------------------------------------------------------------------------------------
        } else{
            throw new ForbiddenException("User does not have access privileges");
        }
        //--------------------------------------------------------------------------------------------------------------
        return setResult(activeUser);
    }


}

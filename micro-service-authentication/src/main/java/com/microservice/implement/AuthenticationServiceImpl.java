package com.microservice.implement;

import com.microservice.dto.SignInDto;
import com.microservice.dto.SignUpMobileDto;
import com.microservice.dto.SignUpWebDto;
import com.microservice.model.*;
import com.microservice.repository.*;
import com.microservice.security.UserAuthentication;
import com.microservice.security.AuthenticateAdapter;
import com.microservice.service.AuthenticationService;
import com.microservice.util.CommonUtil;
import com.microservice.util.DateUtil;
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

    @Autowired
    private ProfileRepo profileRepo;

    @Autowired
    private AdministrativeDivisionRepo administrativeDivisionRepo;

    @Autowired
    private BankAccountRepo bankAccountRepo;

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

                if(user.getCode().equalsIgnoreCase("SU-8181619fa61501619fbfc4ce0001")){
                    GrantedAuthority authority = new SimpleGrantedAuthority("USER");
                    //----------------------------------------------------------------------------------------------
                    Boolean isValidToken = authenticateAdapter.tokenGeneratorAdapter(response, new UserAuthentication(
                            new User(user.getUserName(), user.getPassword(), Arrays.asList(authority))));

                    if (isValidToken) {
                        result.put("result", "protected by system");
                    }
                } else {
                    T_ActiveUser activeUser = statusActive(user.getCode());

                    if (!activeUser.getActiveStatus()) {
                        GrantedAuthority authority = new SimpleGrantedAuthority("USER");
                        //----------------------------------------------------------------------------------------------
                        Boolean isValidToken = authenticateAdapter.tokenGeneratorAdapter(response, new UserAuthentication(
                                new User(user.getUserName(), user.getPassword(), Arrays.asList(authority))));

                        if (isValidToken) {
                            activeUser.setActiveStatus(true);
                            //------------------------------------------------------------------------------------------
                            activeUserRepo.save(activeUser);

                            result = setResult(user);
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

    @Override
    @Transactional(readOnly = false)
    public Map signUpWeb(SignUpWebDto dtos){
        //--------------------------------------------------------------------------------------------------------------
        T_Profile profile = profileRepo.save(setModel(dtos.getProfile(), new T_Profile()));
        //--------------------------------------------------------------------------------------------------------------
        profile.setDateJoined(DateUtil.now());
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(profile.getCode())) {
            T_User user = new T_User();
            //----------------------------------------------------------------------------------------------------------
            setModel(dtos.getUser(), user);
            //----------------------------------------------------------------------------------------------------------
            user.setProfileCode(profile.getCode());
            //----------------------------------------------------------------------------------------------------------
            userRepo.save(user);
            //==========================================================================================================
            T_AdministrativeDivision administrativeDivision = new T_AdministrativeDivision();
            //----------------------------------------------------------------------------------------------------------
            setModel(dtos.getAdministrativeDivision(), administrativeDivision);
            //----------------------------------------------------------------------------------------------------------
            administrativeDivision.setProfileCode(profile.getCode());
            //----------------------------------------------------------------------------------------------------------
            administrativeDivisionRepo.save(administrativeDivision);
            //==========================================================================================================
            T_BankAccount bankAccount = new T_BankAccount();
            //----------------------------------------------------------------------------------------------------------
            setModel(dtos.getBankAccount(), bankAccount);
            //----------------------------------------------------------------------------------------------------------
            bankAccount.setProfileCode(profile.getCode());
            //----------------------------------------------------------------------------------------------------------
            bankAccountRepo.save(bankAccount);
        }
        return setResult(profile);
    }

    @Override
    @Transactional(readOnly = false)
    public Map signUpMobile(SignUpMobileDto dto){
        //--------------------------------------------------------------------------------------------------------------
        T_Profile profile = new T_Profile();
        //--------------------------------------------------------------------------------------------------------------
        profile.setDateJoined(DateUtil.now());
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(dto)) {
            profile.setFirstName(dto.getFirstName());
            //----------------------------------------------------------------------------------------------------------
            profile.setLastName(dto.getLastName());
            //----------------------------------------------------------------------------------------------------------
            profile.setEmailAddress(dto.getEmailAddress());
            //----------------------------------------------------------------------------------------------------------
            profile.setPhoneNumber(dto.getPhoneNumber());
            //----------------------------------------------------------------------------------------------------------
            profile.setStatusEnabled(true);
            //----------------------------------------------------------------------------------------------------------
            profile = profileRepo.save(profile);
            //----------------------------------------------------------------------------------------------------------
            if(CommonUtil.isNotNullOrEmpty(profile.getCode())) {
                T_User user = new T_User();
                //------------------------------------------------------------------------------------------------------
                user.setProfileCode(profile.getCode());
                //------------------------------------------------------------------------------------------------------
                user.setUserName(dto.getUserName());
                //------------------------------------------------------------------------------------------------------
                user.setPassword(dto.getPassword());
                //------------------------------------------------------------------------------------------------------
                userRepo.save(user);
            }
        }
        return setResult(profile);
    }
}

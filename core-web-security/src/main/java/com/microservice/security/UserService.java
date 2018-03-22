package com.microservice.security;

import com.microservice.model.T_User;
import com.microservice.repository.UserRepo;
import com.microservice.util.CommonUtil;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.microservice.util.RestExceptionUtil.InternalServerErrorException;
import com.microservice.util.RestExceptionUtil.NotFoundException;
import org.json.JSONException;
import org.json.JSONObject;

public class UserService implements UserDetailsService {

    @Autowired 
    private UserRepo userRepo;

    private final AccountStatusUserDetailsChecker 
            detailsChecker = new AccountStatusUserDetailsChecker();

    public UserService() {
        super();
    }
    
    @Override
    public final User loadUserByUsername(String headers) throws UsernameNotFoundException {
        String[] header = headers.split("-##-");
        //--------------------------------------------------------------------------------------------------------------
        UserDetails userDetails = null;
        //--------------------------------------------------------------------------------------------------------------
        T_User auth = userRepo.findByStatusEnabledAndUserName(true, header[0]);
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(auth)) {
            GrantedAuthority authority = new SimpleGrantedAuthority("USER");
            userDetails = (UserDetails) new User(convert(auth, header[1]), auth.getPassword(), Arrays.asList(authority));
            detailsChecker.check(userDetails);
        } else {
            throw new NotFoundException("User name not found");
        }
        return (User) userDetails;
    }
    
    private String convert(T_User user, String from) {
        JSONObject sessJson = new JSONObject();
        if (CommonUtil.isNotNullOrEmpty(user)) {
            try {
                sessJson.put("client", from);
                sessJson.put("userCode", user.getCode());
                sessJson.put("userName", user.getUserName());
                sessJson.put("password", user.getPassword());
                //------------------------------------------------------------------------------------------------------
                if(CommonUtil.isNullOrEmpty(user.getProfileCode())
                        && CommonUtil.isNullOrEmpty(user.getJobRoleCode())){

                    sessJson.put("profileCode", "");
                    sessJson.put("jobRoleCode", "");
                } else {
                    sessJson.put("profileCode", user.getProfileCode());
                    sessJson.put("jobRoleCode", user.getJobRoleCode());
                }
            } catch (JSONException e) {
                throw new InternalServerErrorException(e.getMessage());
            }
        }
        return sessJson.toString();
    }
}

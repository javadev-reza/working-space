package com.microservice.security.service;

import com.microservice.model.T_LoginUser;
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
import com.microservice.repository.LoginUserRepository;
import com.microservice.util.RestExceptionUtil.InternalServerErrorException;
import com.microservice.util.RestExceptionUtil.NotFoundException;
import org.json.JSONException;
import org.json.JSONObject;

public class UserService implements UserDetailsService {

    @Autowired 
    private LoginUserRepository loginUserRepository;

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
        T_LoginUser auth = loginUserRepository.findByUserNameAndStatusEnabled(header[0], true);
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
    
    private String convert(T_LoginUser auth, String from) {
        JSONObject sessJson = new JSONObject();
        if (CommonUtil.isNotNullOrEmpty(auth)) {
            try {
                sessJson.put("from", from);
                sessJson.put("authCode", auth.getCode());
                sessJson.put("userName", auth.getUserName());
                sessJson.put("password", auth.getPassword());
                sessJson.put("roleUserId", auth.getRoleUserId());
            } catch (JSONException e) {
                throw new InternalServerErrorException(e.getMessage());
            }
        }
        return sessJson.toString();
    }
}

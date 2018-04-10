package com.microservice.security;

import com.microservice.implement.BaseServiceImpl;
import com.microservice.util.CommonUtil;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import static org.springframework.http.HttpHeaders.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

/**
 *
 * @author reza
 */
@Component
public class AuthenticateAdapter extends BaseServiceImpl {

    public TokenHandler tokenHandler;
	
    public AuthenticateAdapter(UserDetailServiceImpl userDetailServiceImpl) {
        tokenHandler = new TokenHandler(userDetailServiceImpl);
    }

    public Boolean tokenGeneratorAdapter(HttpServletResponse httpResponse, UserAuthentication authentication) {
        final User user = authentication.getDetails();
        //----------------------------------------------------------------------
        String token = tokenHandler.tokenGenerator(user);
        //----------------------------------------------------------------------
        httpResponse.setHeader(AUTHORIZATION, token);
        //----------------------------------------------------------------------
        return CommonUtil.isNotNullOrEmpty(token);
    }

    public Authentication tokenValidatorAdapter(HttpServletRequest request) {
        try {
            final User user = tokenHandler.tokenValidator(request.getHeader(AUTHORIZATION), request.getHeader(FROM));
            if (user != null) {
                return new UserAuthentication(user);
            }
        } catch (Exception ex) {
        }
        return null;
    }

}

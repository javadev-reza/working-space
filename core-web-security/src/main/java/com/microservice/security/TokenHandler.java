package com.microservice.security;

import com.microservice.implement.BaseServiceImpl;
import com.microservice.util.CommonUtil;
import com.microservice.util.PasswordUtil;
import com.microservice.util.RestExceptionUtil.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import org.springframework.security.core.userdetails.User;

import static com.microservice.constanta.WebConstant.SecretCode.*;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

/**
 *
 * @author reza
 */
public class TokenHandler extends BaseServiceImpl {

    private UserDetailServiceImpl userDetailServiceImpl;

    public TokenHandler(UserDetailServiceImpl userDetailServiceImpl) {
        this.userDetailServiceImpl = userDetailServiceImpl;
    }

    public TokenHandler(){}

    public User tokenValidator(String authorization, String from) {
        User user = null;
        //----------------------------------------------------------------------
        if (CommonUtil.isNullOrEmpty(authorization) || !authorization.startsWith("Bearer ")) {
            throw new UnauthorizedException("Missing or invalid authorization");
        } else {
            try {
                final String data = authorization.substring(7);
                String token = decryptor(data, LEVEL_1);
                //--------------------------------------------------------------
                Object hash = Jwts.parser()
                        .setSigningKey(SIGNATURE)
                        .parseClaimsJws(token)
                        .getHeader().get(AUTHORIZATION);

                if(new PasswordUtil().isPasswordEqual(LEVEL_2, hash.toString())){
                    String username = Jwts.parser()
                            .setSigningKey(SIGNATURE)
                            .parseClaimsJws(token)
                            .getBody()
                            .getSubject();
                    user = userDetailServiceImpl.loadUserByUsername(decryptor(username, SECRET)+"-##-"+from);
                } else{
                    throw new UnauthorizedException("Missing or invalid authorization");
                }
            } catch (Exception e) {
                throw new InternalServerErrorException(e.getMessage());
            }
        }
        return user;
    }

    public String tokenGenerator(User use) {
        //----------------------------------------------------------------------
        String token = "";
        try {
            token = Jwts.builder()
                    .setHeaderParam("typ", "JWT")
                    .setHeaderParam(AUTHORIZATION, new PasswordUtil().encryptPassword(LEVEL_2))
                    .setSubject(encryptor(use.getUsername(), SECRET))
                    .signWith(SignatureAlgorithm.HS256, SIGNATURE)
                    .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                    .compact();
        } catch (Exception e) {
            throw new InternalServerErrorException("Internal server error");
        }
        //----------------------------------------------------------------------
        return encryptor(token, LEVEL_1);
    }
}

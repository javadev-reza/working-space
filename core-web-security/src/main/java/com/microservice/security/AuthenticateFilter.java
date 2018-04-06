package com.microservice.security;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.microservice.util.RestExceptionUtil.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

/**
 *
 * @author reza
 */
public class AuthenticateFilter extends GenericFilterBean {

    private final AuthenticateAdapter authService;

    public AuthenticateFilter(AuthenticateAdapter authService) {
        this.authService = authService;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        //--------------------------------------------------------------------------------------------------------------
        Authentication authentication = null;
        //--------------------------------------------------------------------------------------------------------------
        try {
            authentication = authService.tokenValidatorAdapter(servletRequest);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new UnauthorizedException(ex.getMessage());
        }
        //--------------------------------------------------------------------------------------------------------------
        try {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            filterChain.doFilter(servletRequest, servletResponse);
            SecurityContextHolder.getContext().setAuthentication(null);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new InternalServerErrorException(ex.getMessage());
        }
    }

}

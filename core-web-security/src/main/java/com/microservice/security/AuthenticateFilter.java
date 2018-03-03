package com.microservice.security;

import com.microservice.security.service.AuthenticateAdapter;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
            logger.info(ex.getMessage());
            ex.printStackTrace();
        }
        //--------------------------------------------------------------------------------------------------------------
        try {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            filterChain.doFilter(servletRequest, servletResponse);
            SecurityContextHolder.getContext().setAuthentication(null);
        } catch (IOException | ServletException ex) {
            logger.info(ex.getMessage());
            ex.printStackTrace();
            servletResponse.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, ex.getMessage());
        }
    }

}

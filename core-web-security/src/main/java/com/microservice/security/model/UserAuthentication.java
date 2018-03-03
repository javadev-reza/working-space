package com.microservice.security.model;

import java.util.Collection;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class UserAuthentication implements Authentication {

    /**
     * serialVersionUID
     */
    private static final long serialVersionUID = -7410905698525654537L;
    private final User user;
    private String refferal;
    private Integer roleUser;
    private boolean authenticated = true;

    public UserAuthentication(User user, String refferal, Integer roleUser) {
        this.user = user;
        this.refferal = refferal;
        this.roleUser = roleUser;
    }
    
    public UserAuthentication(User user) {
        this.user = user;
    }

    @Override
    public String getName() {
        return user.getUsername();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getAuthorities();
    }

    @Override
    public Object getCredentials() {
        return user.getPassword();
    }

    @Override
    public User getDetails() {
        return user;
    }

    @Override
    public Object getPrincipal() {
        return user.getUsername();
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }

    public Integer getRoleUser() {
        return roleUser;
    }

    public void setRoleUser(Integer roleUser) {
        this.roleUser = roleUser;
    }

    public String getRefferal() {
        return refferal;
    }

    public void setRefferal(String refferal) {
        this.refferal = refferal;
    }

}

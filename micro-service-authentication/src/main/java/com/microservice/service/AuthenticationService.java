package com.microservice.service;

import com.microservice.dto.SignInDto;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public interface AuthenticationService {
    Map signIn(HttpServletResponse response, SignInDto dto);
    Map signOut(String userCode);
}

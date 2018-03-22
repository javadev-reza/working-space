package com.microservice.service;

import com.microservice.dto.SignInDto;
import com.microservice.dto.SignUpMobileDto;
import com.microservice.dto.SignUpWebDto;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public interface AuthenticationService {
    Map signIn(HttpServletResponse response, SignInDto dto);
    Map signOut(String userCode);
    Map signUpWeb(SignUpWebDto dtos);
    Map signUpMobile(SignUpMobileDto dto);
}

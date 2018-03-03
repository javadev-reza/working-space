package com.microservice.service;

import com.microservice.model.BaseService;
import com.microservice.model.dto.T_LoginUserDto;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public interface AuthService {
    Map signIn(HttpServletResponse response, T_LoginUserDto dto);
    Map signOut(String authCode);
}

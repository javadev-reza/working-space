package com.microservice.controller;

import com.microservice.annotation.Permission;
import com.microservice.enums.Restclient;
import com.microservice.model.dto.T_LoginUserDto;
import com.microservice.service.AuthService;
import com.microservice.util.RestUtil;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

import static com.microservice.enums.Roleuser.SUPERUSER;

@RestController("/authenticate")
public class AuthController extends RestUtil{

    @Autowired
    private AuthService authService;

    @ApiOperation("Sign In Web Application")
    @Permission(restclient = Restclient.WEB_APPLICATION)
    @PostMapping(path = "/signin-web", name = "Sign In Web Application")
    public @ResponseBody
    Map signInWebApp(HttpServletResponse response, @RequestBody T_LoginUserDto dto){
        return setResponse(authService.signIn(response, dto));
    }

    @ApiOperation("Sign Out Web Application")
    @Permission(restclient = Restclient.WEB_APPLICATION)
    @PostMapping(path = "/signout-web", name = "Sign Out Web Application")
    public @ResponseBody
    Map signOutWebApp(@RequestParam String authCode){
        return setResponse(authService.signOut(authCode));
    }

}

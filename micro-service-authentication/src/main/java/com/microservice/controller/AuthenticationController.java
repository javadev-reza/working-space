package com.microservice.controller;

import com.microservice.annotation.Permission;
import com.microservice.dto.SignInDto;
import com.microservice.dto.SignUpMobileDto;
import com.microservice.service.AuthenticationService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

import static com.microservice.enums.Restclient.MOBILE;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
public class AuthenticationController extends RestUtil{

    @Autowired
    private AuthenticationService authenticationService;

    @Permission({WEB_APPLICATION, MOBILE})
    @PostMapping(path="/sign-in")
    public @ResponseBody
    Map signIn(HttpServletResponse response, @RequestBody SignInDto dto){
        return setResponse(authenticationService.signIn(response, dto));
    }

    @Permission({WEB_APPLICATION, MOBILE})
    @PostMapping(path="/sign-out")
    public @ResponseBody
    Map signOut(@RequestParam String userCode){
        return setResponse(authenticationService.signOut(userCode));
    }


}

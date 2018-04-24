package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.T_UserDto;
import com.microservice.model.PageDto;
import com.microservice.service.UserService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Company")
@RequestMapping(path = "/user", name = "User")
public class UserController extends RestUtil {

    @Autowired
    private UserService userService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody T_UserDto dto){
        return setResponse(userService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody T_UserDto dto){
        return setResponse(userService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody
    Map delete(@RequestParam String code){
        return setResponse(userService.delete(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody
    Map getOne(@RequestParam String code){
        return setResponse(userService.getOne(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody
    Map getAll(PageDto dto){
        return setResponse(userService.getAll(dto));
    }
}

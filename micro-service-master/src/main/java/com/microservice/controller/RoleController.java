package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.M_BankDto;
import com.microservice.dto.M_RoleDto;
import com.microservice.model.PageDto;
import com.microservice.service.RoleService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Master")
@RequestMapping(path = "/role", name = "Master Role")
public class RoleController extends RestUtil {

    @Autowired
    private RoleService roleService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody Map save(@RequestBody M_RoleDto dto){
        return setResponse(roleService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path="/update", name = UPDATE)
    public @ResponseBody Map update(@RequestBody M_RoleDto dto){
        return setResponse(roleService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody Map delete(@RequestParam Integer id){
        return setResponse(roleService.delete(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody Map getOne(@RequestParam Integer id){
        return setResponse(roleService.getOne(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody Map getAll(PageDto dto){
        return setResponse(roleService.getAll(dto));
    }

}

package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.T_EmployeeDto;
import com.microservice.model.PageDto;
import com.microservice.service.EmployeeService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.constanta.ApplicationConstant.name.GET_ALL;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Company Profile")
@RequestMapping(path = "/employee-registration", name = "Employee Registration")
public class EmployeeController extends RestUtil {

    @Autowired
    private EmployeeService employeeService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody T_EmployeeDto dto){
        return setResponse(employeeService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody T_EmployeeDto dto){
        return setResponse(employeeService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody
    Map delete(@RequestParam String code){
        return setResponse(employeeService.delete(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody
    Map getOne(@RequestParam String code){
        return setResponse(employeeService.getOne(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody
    Map getAll(PageDto dto){
        return setResponse(employeeService.getAll(dto));
    }
}

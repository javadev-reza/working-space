package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.T_CompanyDto;
import com.microservice.service.CompanyService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.DELETE;
import static com.microservice.constanta.ApplicationConstant.name.SAVE;
import static com.microservice.constanta.ApplicationConstant.name.UPDATE;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Company")
@RequestMapping(path = "/company", name = "Company")
public class CompanyController extends RestUtil {

    @Autowired
    private CompanyService companyService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody T_CompanyDto dto){
        return setResponse(companyService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody T_CompanyDto dto){
        return setResponse(companyService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody
    Map delete(@RequestParam String code){
        return setResponse(companyService.delete(code));
    }
}

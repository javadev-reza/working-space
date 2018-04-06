package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.CompanyRegistrationDto;
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
@Modul(name = "Company Profile")
@RequestMapping(path = "/company-registration", name = "Company Registration")
public class CompanyController extends RestUtil {

    @Autowired
    private CompanyService companyService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody CompanyRegistrationDto dto){
        return setResponse(companyService.registration_add(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody CompanyRegistrationDto dto){
        return setResponse(companyService.registration_update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody
    Map delete(@RequestBody CompanyRegistrationDto dto){
        return setResponse(companyService.registration_delete(dto));
    }
}

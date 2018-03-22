package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.M_BankDto;
import com.microservice.dto.M_GenderDto;
import com.microservice.model.PageDto;
import com.microservice.service.GenderService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.constanta.ApplicationConstant.name.GET_ALL;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Master")
@RequestMapping(path = "/gender", name = "Master Gender")
public class GenderController extends RestUtil {

    @Autowired
    private GenderService genderService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody M_GenderDto dto){
        return setResponse(genderService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path="/update", name = UPDATE)
    public @ResponseBody Map update(@RequestBody M_GenderDto dto){
        return setResponse(genderService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody Map delete(@RequestParam Integer id){
        return setResponse(genderService.delete(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody Map getOne(@RequestParam Integer id){
        return setResponse(genderService.getOne(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody Map getAll(PageDto dto){
        return setResponse(genderService.getAll(dto));
    }
}

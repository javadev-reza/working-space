package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.M_BankDto;
import com.microservice.model.PageDto;
import com.microservice.service.BankService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Master")
@RequestMapping(path = "/bank", name = "Master Bank")
public class BankController extends RestUtil {

    @Autowired
    private BankService bankService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody Map save(@RequestBody M_BankDto dto){
        return setResponse(bankService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path="/update", name = UPDATE)
    public @ResponseBody Map update(@RequestBody M_BankDto dto){
        return setResponse(bankService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody Map delete(@RequestParam Integer id){
        return setResponse(bankService.delete(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody Map getOne(@RequestParam Integer id){
        return setResponse(bankService.getOne(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody Map getAll(PageDto dto){
        return setResponse(bankService.getAll(dto));
    }

}

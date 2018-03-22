package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.M_ReligionDto;
import com.microservice.dto.M_VilageDto;
import com.microservice.model.M_Religion;
import com.microservice.model.PageDto;
import com.microservice.service.ReligionService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Master")
@RequestMapping(path = "/religion", name = "Master Religion")
public class ReligionController extends RestUtil {

    @Autowired
    private ReligionService religionService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody Map save(@RequestBody M_ReligionDto dto){
        return setResponse(religionService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path="/update", name = UPDATE)
    public @ResponseBody Map update(@RequestBody M_ReligionDto dto){
        return setResponse(religionService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody Map delete(@RequestParam Integer id){
        return setResponse(religionService.delete(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody Map getOne(@RequestParam Integer id){
        return setResponse(religionService.getOne(id));
    }

    @Permission({WEB_APPLICATION})
    @GetMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody Map getAll(PageDto dto){
        return setResponse(religionService.getAll(dto));
    }

}

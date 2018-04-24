package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.T_ServicesDto;
import com.microservice.model.PageDto;
import com.microservice.service.OrderService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Company")
@RequestMapping(path = "/order", name = "Order")
public class OrderController extends RestUtil {

    @Autowired
    private OrderService orderService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody T_ServicesDto dto){
        return setResponse(orderService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody
    Map getOne(@RequestParam String code){
        return setResponse(orderService.getOne(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody
    Map getAll(PageDto dto){
        return setResponse(orderService.getAll(dto));
    }
}

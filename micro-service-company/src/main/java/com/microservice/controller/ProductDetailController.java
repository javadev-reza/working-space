package com.microservice.controller;

import com.microservice.annotation.Modul;
import com.microservice.annotation.Permission;
import com.microservice.dto.T_ProductDetailDto;
import com.microservice.dto.T_ProductDto;
import com.microservice.model.PageDto;
import com.microservice.service.ProductDetailService;
import com.microservice.service.ProductService;
import com.microservice.util.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.microservice.constanta.ApplicationConstant.name.*;
import static com.microservice.enums.Restclient.WEB_APPLICATION;

@RestController
@Modul(name = "Company")
@RequestMapping(path = "/product-detail", name = "Product Detail")
public class ProductDetailController extends RestUtil {

    @Autowired
    private ProductDetailService productDetailService;

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/save", name = SAVE)
    public @ResponseBody
    Map save(@RequestBody T_ProductDetailDto dto){
        return setResponse(productDetailService.save(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/update", name = UPDATE)
    public @ResponseBody
    Map update(@RequestBody T_ProductDetailDto dto){
        return setResponse(productDetailService.update(dto));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/delete", name = DELETE)
    public @ResponseBody
    Map delete(@RequestParam String code){
        return setResponse(productDetailService.delete(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-one", name = GET_ONE)
    public @ResponseBody
    Map getOne(@RequestParam String code){
        return setResponse(productDetailService.getOne(code));
    }

    @Permission({WEB_APPLICATION})
    @PostMapping(path = "/get-all", name = GET_ALL)
    public @ResponseBody
    Map getAll(PageDto dto){
        return setResponse(productDetailService.getAll(dto));
    }
}

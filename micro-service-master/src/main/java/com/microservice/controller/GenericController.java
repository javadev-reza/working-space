package com.microservice.controller;

import com.microservice.annotation.Permission;

import static com.microservice.enums.Restclient.MOBILE;
import static com.microservice.enums.Restclient.WEB_APPLICATION;
import com.microservice.service.GenericService;
import com.microservice.util.RestUtil;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author reza
 */
@RestController
@RequestMapping(path = "/generic")
public class GenericController extends RestUtil {

    @Autowired
    private GenericService genericService;

    @Permission({WEB_APPLICATION, MOBILE})
    @GetMapping(path = "/list-generic")
    public @ResponseBody Map listGeneric(
            @RequestParam(value = "page", defaultValue = "1") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size,
            @RequestParam(value = "className", required = false) String className,
            @RequestParam(value = "fields", required = false) String fields,
            @RequestParam(value = "criteria", required = false) String criteria,
            @RequestParam(value = "Roleuser", required = false) String value) {
        return setResponse(genericService.getAll(page, size, className, fields, criteria, value));
    }

}

package com.microservice.security.service.impl;

import com.microservice.repository.custom.GenericRepoCustom;

import java.util.Map;

import com.microservice.security.service.GenericService;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author reza
 */
@Service
public class GenericServiceImpl extends BaseServiceImpl implements GenericService {
    
    @Autowired
    private GenericRepoCustom genericRepoCustom;
    
    @Override
    public Map getAll(Integer page, Integer size, String className, String fields, String criteria, String value) {
        Map<String, Object> resultMap = new HashMap<>();
        //----------------------------------------------------------------------
        Integer[] pagging = genericRepoCustom
                .paging(page, size, genericRepoCustom.getCountGenericModel(className, criteria, value));
        //----------------------------------------------------------------------
        List<Map> listData = genericRepoCustom
                .getGenericModel(pagging[0], pagging[1], className, fields, criteria, value);
        //----------------------------------------------------------------------
        resultMap.put("result", listData);
        resultMap.put("totalSize", pagging[2]);
        resultMap.put("totalPages", pagging[3]);
        resultMap.put("totalElements", listData.size());
        //----------------------------------------------------------------------
        return resultMap;
    }

}

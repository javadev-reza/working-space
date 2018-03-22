package com.microservice.implement;

import com.microservice.repository.custom.service.GenericRepo;

import java.util.Map;

import com.microservice.service.GenericService;
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
    private GenericRepo genericRepo;
    
    @Override
    public Map getAll(Integer page, Integer size, String className, String fields, String criteria, String value) {
        Map<String, Object> resultMap = new HashMap<>();
        //----------------------------------------------------------------------
        Integer[] pagging = genericRepo
                .paging(page, size, genericRepo.getCountGenericModel(className, criteria, value));
        //----------------------------------------------------------------------
        List<Map> listData = genericRepo
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

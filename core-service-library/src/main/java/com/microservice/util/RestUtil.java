package com.microservice.util;

import com.microservice.model.BaseTemp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.microservice.util.RestExceptionUtil.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Reza
 */
public class RestUtil extends BaseTemp{
    
    public @ResponseBody
    <T> List setResponse(List<Map<String, Object>> src) {
        if (CommonUtil.isNotNullOrEmpty(src)) {
            return src;
        } else {
            throw new NotFoundException("Not found");
        }
    }

    public @ResponseBody
    Map setResponse(Map<String, Object> src) {
        if (CommonUtil.isNotNullOrEmpty(src)) {
            return src;
        } else {
            throw new NotFoundException("Not found");
        }
    }

    public @ResponseBody
    <T> Map setPageResponse(Page<T> src) {
        if (CommonUtil.isNotNullOrEmpty(src.getContent())) {
            Map<String, Object> result = new HashMap<>();
            result.put("result", src.getContent());
            result.put("size", src.getSize());
            result.put("totalPages", src.getTotalPages());
            result.put("totalElements", src.getTotalElements());
            result.put("number", src.getNumber());
            return result;
        } else {
            throw new NotFoundException("Not found");
        }
    }

    public String setResponseWeb(Map<String, Object> src, String url, String link){
        if(CommonUtil.isNotNullOrEmpty(src.get("responseBody"))) {
            if ((Integer) src.get("statusCode") == 200) {
                return link;
            } else {
                return url;
            }
        } else{
            throw new NotFoundException("Not found");
        }
    }
    
}
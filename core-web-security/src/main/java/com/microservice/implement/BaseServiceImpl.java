package com.microservice.implement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.microservice.dto.M_ModulDto;
import com.microservice.dto.SessionDto;
import com.microservice.model.BaseTemp;
import com.microservice.model.PageDto;
import com.microservice.util.CommonUtil;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashMap;

import com.microservice.util.RestExceptionUtil;
import org.jasypt.util.text.BasicTextEncryptor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;
import org.json.JSONObject;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 *
 * @author reza
 */
public abstract class BaseServiceImpl extends BaseTemp {

    //------------------------------------------------------------------------------------------------------------------
    public String getGenerateCode() {
        SecureRandom numberGenerator = null;
        final long MSB = 0x8000000000000000L;
        SecureRandom ng = numberGenerator;
        if (ng == null) {
            numberGenerator = ng = new SecureRandom();
        }
        return Long.toHexString(MSB | ng.nextLong()) + Long.toHexString(MSB | ng.nextLong());
    }

    //------------------------------------------------------------------------------------------------------------------
    public Map setResultPage(Page value) {
        Map<String, Object> resultMap = new HashMap<>();

        if (CommonUtil.isNotNullOrEmpty(value)) {
            resultMap.put("content", value.getContent());
            resultMap.put("totalPages", value.getTotalPages());
            resultMap.put("totalElements", value.getTotalElements());
            resultMap.put("limit", value.getSize());
            resultMap.put("number", value.getNumber());
        }
        return resultMap;

    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> T getClassModel(String clazz) {
        return (T) clazz.getClass();
    }

    //------------------------------------------------------------------------------------------------------------------
    public PageRequest setPageRequest(PageDto pageDto) {
        if (CommonUtil.isNotNullOrEmpty(pageDto.getSort())) {
            return new PageRequest(
                    pageDto.getPage() - 1,
                    pageDto.getLimit(),
                    "asc".equals(pageDto.getDir()) ? Sort.Direction.ASC : Sort.Direction.DESC,
                    pageDto.getSort());
        } else {
            return new PageRequest(
                    pageDto.getPage() - 1,
                    pageDto.getLimit());
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    public String[] split(String statement, String splitBy) {
        return statement.split(splitBy);
    }

    //------------------------------------------------------------------------------------------------------------------
    public SessionDto getSession() {
        SessionDto sessionDto = new SessionDto();
        //----------------------------------------------------------------------
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //----------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(principal)) {
            //------------------------------------------------------------------
            JSONObject json = new JSONObject(principal.toString());
            //------------------------------------------------------------------
            sessionDto.setClient(json.getString("client"));
            sessionDto.setUserCode(json.getString("userCode"));
            sessionDto.setJobRoleCode(json.getString("jobRoleCode"));
            sessionDto.setUserName(json.getString("userName"));
            sessionDto.setPassword(json.getString("password"));
        }
        return sessionDto;
    }

    //------------------------------------------------------------------------------------------------------------------
    public String encryptor(String value, String key){
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        textEncryptor.setPassword(key);
        return textEncryptor.encrypt(value);
    }

    //------------------------------------------------------------------------------------------------------------------
    public String decryptor(String value, String key){
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        textEncryptor.setPassword(key);
        return textEncryptor.decrypt(value);
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> Object toModel(Object instance, T clazz){
        return new Gson().fromJson(new Gson().toJsonTree(instance), (Class<T>) clazz.getClass());
    }

    //------------------------------------------------------------------------------------------------------------------

    public <T> Map<String, Object> toMap(T clazz){
        Type type = new TypeToken<Map<String, Object>>(){}.getType();
        return new Gson().fromJson(new Gson().toJsonTree(clazz), type);
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> List<Map> toListMap(List<T> listClazz){
        Type type = new TypeToken<List<Map<String, Object>>>(){}.getType();
        return new Gson().fromJson(new Gson().toJsonTree(listClazz), type);
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> String listMapToJson(List<T> listClazz){
        return new Gson().toJson(listClazz);
    }

    //------------------------------------------------------------------------------------------------------------------
    public List<M_ModulDto> jsonToModulDto(String instance){
        Type type = new TypeToken<List<M_ModulDto>>() {}.getType();
        return new Gson().fromJson(instance, type);
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> T setModel(Object dto, T model){
        T result;
        if(CommonUtil.isNotNullOrEmpty(dto)) {
            BeanUtils.copyProperties(dto, model);
            result = model;
        } else{
            throw new RestExceptionUtil.BadRequestException(
                    model.getClass().getSimpleName()+" : is empty");
        }
        return result;
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> T setModel(T model){
        T result;
        if(CommonUtil.isNotNullOrEmpty(model)){
            result = model;
        } else{
            throw new RestExceptionUtil.BadRequestException(
                    model.getClass().getSimpleName()+" : is empty");
        }
        return result;
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> Map setResult(T model){
        Map<String, Object> result = new HashMap<>();
        if(CommonUtil.isNotNullOrEmpty(model)) {
            if (model instanceof org.springframework.data.domain.Page) {
                result.put("result", setResultPage((Page) model));
            } else if (model instanceof Map){
                result.put("result", toMap(model));
            } else if(model instanceof List){
                result.put("result", toMap(model));
            } else {
                result.put("result", toMap(model));
            }
        }
        return result;
    }

    //------------------------------------------------------------------------------------------------------------------
    public List<Integer> setGroupId(String getGroupBy){
        List<Integer> group = new ArrayList<>();

        if(CommonUtil.isNotNullOrEmpty(getGroupBy)) {
            for (String split : split(getGroupBy, ",")) {
                group.add(Integer.parseInt(split));
            }
        } else{
            group.add(0);
        }
        return group;
    }

    public List<String> setGroupCode(String getGroupBy){
        List<String> group = new ArrayList<>();

        if(CommonUtil.isNotNullOrEmpty(getGroupBy)) {
            for (String split : split(getGroupBy, ",")) {
                group.add(split);
            }
        } else{
            group.add("");
        }
        return group;
    }
}

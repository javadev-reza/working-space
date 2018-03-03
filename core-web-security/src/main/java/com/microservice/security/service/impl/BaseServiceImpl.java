package com.microservice.security.service.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.microservice.model.BaseTemp;
import com.microservice.model.dto.M_ModulDto;
import com.microservice.model.dto.PageDto;
import com.microservice.model.dto.SessionDto;
import com.microservice.util.CommonUtil;

import java.lang.reflect.Type;
import java.security.SecureRandom;
import java.util.HashMap;

import org.jasypt.util.text.BasicTextEncryptor;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;
import org.json.JSONObject;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;

public abstract class BaseServiceImpl extends BaseTemp {

    //--------------------------------------------------------------------------
    public String getGenerateCode() {
        SecureRandom numberGenerator = null;
        final long MSB = 0x8000000000000000L;
        SecureRandom ng = numberGenerator;
        if (ng == null) {
            numberGenerator = ng = new SecureRandom();
        }
        return Long.toHexString(MSB | ng.nextLong()) + Long.toHexString(MSB | ng.nextLong());
    }

    //--------------------------------------------------------------------------
    public Page setResultPage(Page value) {
        data = null;
        if (CommonUtil.isNotNullOrEmpty(value)) {
            data = value;
        }
        return data;
    }

    //--------------------------------------------------------------------------
    public Map getResultPage() {
        Map<String, Object> resultMap = new HashMap<>();

        if (CommonUtil.isNotNullOrEmpty(data)) {
            resultMap.put("result", data.getContent());
            resultMap.put("totalPages", data.getTotalPages());
            resultMap.put("totalElements", data.getTotalElements());
        }
        return resultMap;

    }

    //--------------------------------------------------------------------------
    public <T> T getClassModel(String clazz) {
        return (T) clazz.getClass();
    }

    //-------------------------------------------------------------------------- 
    public PageRequest getPageRequest(PageDto pageVO) {
        if (CommonUtil.isNotNullOrEmpty(pageVO.getSort())) {
            return new PageRequest(
                    pageVO.getPage() - 1,
                    pageVO.getLimit(),
                    "asc".equals(pageVO.getDir()) ? Sort.Direction.ASC : Sort.Direction.DESC,
                    pageVO.getSort());
        } else {
            return new PageRequest(
                    pageVO.getPage() - 1,
                    pageVO.getLimit());
        }
    }

    //--------------------------------------------------------------------------
    public String[] split(String statement, String splitBy) {
        return statement.split(splitBy);
    }

    //--------------------------------------------------------------------------
    public SessionDto getSession() {
        SessionDto sessionDto = new SessionDto();
        //----------------------------------------------------------------------
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //----------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(principal)) {
            //------------------------------------------------------------------
            JSONObject json = new JSONObject(principal.toString());
            //------------------------------------------------------------------
            sessionDto.setAuthCode(json.getString("from"));
            sessionDto.setAuthCode(json.getString("authCode"));
            sessionDto.setUserName(json.getString("userName"));
            sessionDto.setPassword(json.getString("password"));
            sessionDto.setRoleUserId(json.getInt("roleUserId"));
        }
        return sessionDto;
    }

    //--------------------------------------------------------------------------
    public String encryptor(String value, String key){
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        textEncryptor.setPassword(key);
        return textEncryptor.encrypt(value);
    }

    //--------------------------------------------------------------------------
    public String decryptor(String value, String key){
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        textEncryptor.setPassword(key);
        return textEncryptor.decrypt(value);
    }

    public <T> Object toModel(Object instance, T clazz){
        return new Gson().fromJson(new Gson().toJson(instance), (Class<T>) clazz.getClass());
    }

    public <T> Map<String, Object> toMap(T clazz){
        Type type = new TypeToken<Map<String, Object>>(){}.getType();
        return new Gson().fromJson(new Gson().toJsonTree(clazz), type);
    }

    public <T> List<Map> toListMap(List<T> listClazz){
        Type type = new TypeToken<List<Map<String, Object>>>(){}.getType();
        return new Gson().fromJson(new Gson().toJsonTree(listClazz), type);
    }

    public <T> String listMapToJson(List<T> listClazz){
        return new Gson().toJson(listClazz);
    }

    public List<M_ModulDto> jsonToModulDto(String instance){
        Type type = new TypeToken<List<M_ModulDto>>() {}.getType();
        return new Gson().fromJson(instance, type);
    }
}

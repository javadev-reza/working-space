package com.microservice.implement;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.microservice.dto.*;
import com.microservice.dto.custom.SessionDto;
import com.microservice.model.*;
import com.microservice.service.BaseRepository;
import com.microservice.util.CommonUtil;

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

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author reza
 */
public abstract class BaseServiceImpl extends BaseRepository {

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

    public String getDefaultPassword(){
        String password = getGenerateCode();
        return password.substring(password.length()-10, password.length()).toUpperCase();
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
        //--------------------------------------------------------------------------------------------------------------
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(principal)) {
            return (SessionDto) mapToModel(stringToMap(principal.toString()), new TypeToken<SessionDto>(){}.getType());
        } else{
            return new SessionDto();
        }
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
    public <T> T mapToModel(Map map, Type type){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(gson.toJsonTree(map), type);
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> Map modelToMap(T clazz){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(gson.toJsonTree(clazz), new TypeToken<Map>(){}.getType());
    }

    //------------------------------------------------------------------------------------------------------------------
    public String mapToString(Map map){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.toJson(map);
    }

    //------------------------------------------------------------------------------------------------------------------
    public Map stringToMap(String json){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(json, new TypeToken<Map>(){}.getType());
    }

    //------------------------------------------------------------------------------------------------------------------
    public <T> List<Map> listModelToListMap(List<T> listClazz){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(gson.toJsonTree(listClazz), new TypeToken<List<Map>>(){}.getType());
    }
    //------------------------------------------------------------------------------------------------------------------
    public <T> List<Map> listMapToListModel(List<Map> listClazz){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(gson.toJsonTree(listClazz), new TypeToken<T>(){}.getType());
    }
    //------------------------------------------------------------------------------------------------------------------
    public <T> String listMapToString(List<T> listClazz){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.toJson(listClazz);
    }

    //------------------------------------------------------------------------------------------------------------------
    public List<M_ModulDto> jsonToModulDto(String instance){
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        return gson.fromJson(instance, new TypeToken<List<M_ModulDto>>() {}.getType());
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
                //------------------------------------------------------------------------------------------------------
            } else {
                //------------------------------------------------------------------------------------------------------
                if(model instanceof T_User){
                    Map<String, Object> user = modelToMap(model);
                    user.replace("password", "-");
                    result.put("result", user);
                } else {
                    result.put("result", model);
                }
            }
        }
        return result;
    }

    public Map getResult(Map<String, Object> value){
        return (Map<String, Object>) value.get("result");
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

    //------------------------------------------------------------------------------------------------------------------
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

    //------------------------------------------------------------------------------------------------------------------
    @Transactional(readOnly = false)
    public void emailing(String subject, String message, String emailAddress){
        emailService.sendEmail(subject, message, emailAddress);
    }
}

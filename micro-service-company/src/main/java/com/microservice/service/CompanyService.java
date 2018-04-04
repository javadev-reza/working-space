package com.microservice.service;

import com.microservice.dto.CompanyRegistrationDto;
import com.microservice.dto.T_CompanyDto;
import com.microservice.model.BaseService;

import java.util.Map;

public interface CompanyService extends BaseService<T_CompanyDto, String> {
    Map registration_add(CompanyRegistrationDto dto);
    Map registration_update(CompanyRegistrationDto dto);
    Map registration_delete(CompanyRegistrationDto dto);
}

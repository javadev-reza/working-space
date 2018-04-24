package com.microservice.service;

import com.microservice.dto.T_ServicesDto;
import com.microservice.model.PageDto;

import java.util.Map;

public interface OrderService {
    Map update(T_ServicesDto dto);
    Map getOne(String primary);
    Map getAll(PageDto pageDto);
}

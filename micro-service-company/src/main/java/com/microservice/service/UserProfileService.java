package com.microservice.service;

import com.microservice.dto.T_UserProfileDto;
import com.microservice.model.BaseService;
import com.microservice.model.T_UserProfile;

import java.util.Map;

public interface UserProfileService extends BaseService<T_UserProfileDto, String>{
    Map getOneByUserCode(String userCode);
}

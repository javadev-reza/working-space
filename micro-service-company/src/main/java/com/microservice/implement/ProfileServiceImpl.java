package com.microservice.implement;

import com.microservice.dto.T_ProfileDto;
import com.microservice.model.PageDto;
import com.microservice.repository.ProfileRepo;
import com.microservice.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ProfileServiceImpl extends BaseServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepo profileRepo;

    @Override
    public Map save(T_ProfileDto dto) {
        return null;
    }

    @Override
    public Map update(T_ProfileDto dto) {
        return null;
    }

    @Override
    public Map delete(String primary) {
        return null;
    }

    @Override
    public Map getOne(String primary) {
        return null;
    }

    @Override
    public Map getAll(PageDto pageDto) {
        return null;
    }
}

package com.microservice.implement;

import com.microservice.dto.T_RoleToBusinessScaleDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_RoleToBusinessScale;
import com.microservice.repository.RoleToBusinessScaleRepo;
import com.microservice.service.RoleToBusinessScaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RoleToBusinessScaleServiceImpl extends BaseServiceImpl implements RoleToBusinessScaleService {

    @Autowired
    private RoleToBusinessScaleRepo roleToBusinessScaleRepo;

    @Override
    public Map save(T_RoleToBusinessScaleDto dto) {
        T_RoleToBusinessScale roleToBusinessScale = setModel(dto, new T_RoleToBusinessScale());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleToBusinessScaleRepo.save(roleToBusinessScale));
    }

    @Override
    public Map update(T_RoleToBusinessScaleDto dto) {
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

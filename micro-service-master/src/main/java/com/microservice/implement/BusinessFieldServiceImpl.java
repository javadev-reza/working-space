package com.microservice.implement;

import com.microservice.dto.M_BusinessFieldDto;
import com.microservice.model.M_BusinessField;
import com.microservice.model.PageDto;
import com.microservice.repository.BusinessFieldRepo;
import com.microservice.service.BusinessFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BusinessFieldServiceImpl extends BaseServiceImpl implements BusinessFieldService {

    @Autowired
    private BusinessFieldRepo businessFieldRepo;


    @Override
    public Map save(M_BusinessFieldDto dto) {
        M_BusinessField businessField = setModel(dto, new M_BusinessField());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessFieldRepo.save(businessField));
    }

    @Override
    public Map update(M_BusinessFieldDto dto) {
        M_BusinessField businessField = setModel(dto,
                businessFieldRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessFieldRepo.save(businessField));
    }

    @Override
    public Map delete(Integer primary) {
        M_BusinessField businessField = setModel(
                businessFieldRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        businessField.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessFieldRepo.save(businessField));
    }

    @Override
    public Map getOne(Integer primary) {
        M_BusinessField businessField = setModel(
                businessFieldRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessFieldRepo.save(businessField));
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_BusinessField> businessFields =
                businessFieldRepo.findByStatusEnabledAndBusinessFieldIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessFields);
    }
}


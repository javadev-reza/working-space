package com.microservice.implement;

import com.microservice.dto.M_BusinessScaleDto;
import com.microservice.model.M_BusinessScale;
import com.microservice.model.PageDto;
import com.microservice.repository.BusinessScaleRepo;
import com.microservice.service.BusinessScaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BusinessScaleServiceImpl extends BaseServiceImpl implements BusinessScaleService {

    @Autowired
    private BusinessScaleRepo businessScaleRepo;


    @Override
    public Map save(M_BusinessScaleDto dto) {
        M_BusinessScale businessScale = setModel(dto, new M_BusinessScale());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessScaleRepo.save(businessScale));
    }

    @Override
    public Map update(M_BusinessScaleDto dto) {
        M_BusinessScale businessScale = setModel(dto,
                businessScaleRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessScaleRepo.save(businessScale));
    }

    @Override
    public Map delete(Integer primary) {
        M_BusinessScale businessScale = setModel(
                businessScaleRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        businessScale.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessScaleRepo.save(businessScale));
    }

    @Override
    public Map getOne(Integer primary) {
        M_BusinessScale businessScale = setModel(
                businessScaleRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessScaleRepo.save(businessScale));
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_BusinessScale> businessScales =
                businessScaleRepo.findByStatusEnabledAndBusinessScaleIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(businessScales);
    }
}


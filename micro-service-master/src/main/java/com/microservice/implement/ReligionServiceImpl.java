package com.microservice.implement;

import com.microservice.dto.M_ReligionDto;
import com.microservice.model.M_Religion;
import com.microservice.model.PageDto;
import com.microservice.repository.ReligionRepo;
import com.microservice.service.ReligionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ReligionServiceImpl extends BaseServiceImpl implements ReligionService {

    @Autowired
    private ReligionRepo religionRepo;

    @Override
    public Map save(M_ReligionDto dto) {
        M_Religion religion = setModel(dto, new M_Religion());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(religionRepo.save(religion));
    }

    @Override
    public Map update(M_ReligionDto dto) {
        M_Religion religion = setModel(dto,
                religionRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(religionRepo.save(religion));
    }

    @Override
    public Map delete(Integer primary) {
        M_Religion religion = setModel(
                religionRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        religion.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(religionRepo.save(religion));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Religion religion = setModel(
                religionRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(religion);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Religion> religions =
                religionRepo.findByStatusEnabledAndReligionIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(religions);
    }
}

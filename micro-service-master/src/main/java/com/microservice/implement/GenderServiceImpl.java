package com.microservice.implement;

import com.microservice.dto.M_GenderDto;
import com.microservice.model.M_Gender;
import com.microservice.model.PageDto;
import com.microservice.repository.GenderRepo;
import com.microservice.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class GenderServiceImpl extends BaseServiceImpl implements GenderService {

    @Autowired
    private GenderRepo genderRepo;

    @Override
    public Map save(M_GenderDto dto) {
        M_Gender gender = setModel(dto, new M_Gender());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(genderRepo.save(gender));
    }

    @Override
    public Map update(M_GenderDto dto) {
        M_Gender gender = setModel(dto,
                genderRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(genderRepo.save(gender));
    }

    @Override
    public Map delete(Integer primary) {
        M_Gender gender = setModel(
                genderRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        gender.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(genderRepo.save(gender));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Gender gender = setModel(
                genderRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(gender);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Gender> genders =
                genderRepo.findByStatusEnabledAndGenderIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(genders);
    }
}

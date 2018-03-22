package com.microservice.implement;

import com.microservice.dto.M_VilageDto;
import com.microservice.model.M_Vilage;
import com.microservice.model.PageDto;
import com.microservice.repository.VilageRepo;
import com.microservice.service.VilageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class VilageServiceImpl extends BaseServiceImpl implements VilageService {

    @Autowired
    private VilageRepo vilageRepo;

    @Override
    public Map save(M_VilageDto dto) {
        M_Vilage vilage = setModel(dto, new M_Vilage());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(vilageRepo.save(vilage));
    }

    @Override
    public Map update(M_VilageDto dto) {
        M_Vilage vilage = setModel(dto,
                vilageRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(vilageRepo.save(vilage));
    }

    @Override
    public Map delete(Integer primary) {
        M_Vilage vilage = setModel(
                vilageRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        vilage.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(vilageRepo.save(vilage));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Vilage vilage = setModel(
                vilageRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(vilage);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Vilage> vilages =
                vilageRepo.findByStatusEnabledAndDistrictIdIsInAndVilageIgnoreCaseContaining(
                        setPageRequest(pageDto), true, setGroupId(pageDto.getGroupBy()), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(vilages);
    }
}

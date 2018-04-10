package com.microservice.implement;

import com.microservice.dto.M_CountyTownDto;
import com.microservice.model.M_CountyTown;
import com.microservice.model.PageDto;
import com.microservice.repository.CountyTownRepo;
import com.microservice.service.CountyTownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CountyTownServiceImpl extends BaseServiceImpl implements CountyTownService {


    @Override
    public Map save(M_CountyTownDto dto) {
        M_CountyTown countyTown = setModel(dto, new M_CountyTown());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countyTownRepo.save(countyTown));
    }

    @Override
    public Map update(M_CountyTownDto dto) {
        M_CountyTown countyTown = setModel(dto,
                countyTownRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countyTownRepo.save(countyTown));
    }

    @Override
    public Map delete(Integer primary) {
        M_CountyTown countyTown = setModel(
                countyTownRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        countyTown.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countyTownRepo.save(countyTown));
    }

    @Override
    public Map getOne(Integer primary) {
        M_CountyTown countyTown = setModel(
                countyTownRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countyTown);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_CountyTown> countyTowns =
                countyTownRepo.findByStatusEnabledAndProvinceIdIsInAndCountyTownIgnoreCaseContaining(
                        setPageRequest(pageDto), true, setGroupId(pageDto.getGroupBy()), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countyTowns);
    }
}

package com.microservice.implement;

import com.microservice.dto.M_DistrictDto;
import com.microservice.model.M_District;
import com.microservice.model.PageDto;
import com.microservice.repository.DistrictRepo;
import com.microservice.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DistrictServiceImpl extends BaseServiceImpl implements DistrictService {


    @Override
    public Map save(M_DistrictDto dto) {
        M_District district = setModel(dto, new M_District());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(districtRepo.save(district));
    }

    @Override
    public Map update(M_DistrictDto dto) {
        M_District district = setModel(dto,
                districtRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(districtRepo.save(district));
    }

    @Override
    public Map delete(Integer primary) {
        M_District district = setModel(
                districtRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(districtRepo.save(district));
    }

    @Override
    public Map getOne(Integer primary) {
        M_District district = setModel(
                districtRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(district);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_District> districts =
                districtRepo.findByStatusEnabledAndCountyTownIdIsInAndDistrictIgnoreCaseContaining(
                        setPageRequest(pageDto), true, setGroupId(pageDto.getGroupBy()), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(districts);
    }
}

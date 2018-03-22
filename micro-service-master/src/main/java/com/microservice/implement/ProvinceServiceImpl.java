package com.microservice.implement;

import com.microservice.dto.M_ProvinceDto;
import com.microservice.model.M_Province;
import com.microservice.model.PageDto;
import com.microservice.repository.ProvinceRepo;
import com.microservice.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ProvinceServiceImpl extends BaseServiceImpl implements ProvinceService {

    @Autowired
    private ProvinceRepo provinceRepo;

    @Override
    public Map save(M_ProvinceDto dto) {
        M_Province province = setModel(dto, new M_Province());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(provinceRepo.save(province));
    }

    @Override
    public Map update(M_ProvinceDto dto) {
        M_Province province = setModel(dto,
                provinceRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(provinceRepo.save(province));
    }

    @Override
    public Map delete(Integer primary) {
        M_Province province = setModel(
                provinceRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        province.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(provinceRepo.save(province));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Province province = setModel(
                provinceRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(province);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Province> provinces =
                provinceRepo.findByStatusEnabledAndCountryIdIsInAndProvinceIgnoreCaseContaining(
                        setPageRequest(pageDto), true, setGroupId(pageDto.getGroupBy()), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(provinces);
    }

}

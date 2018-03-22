package com.microservice.implement;

import com.microservice.dto.T_CompanyDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Company;
import com.microservice.repository.CompanyRepo;
import com.microservice.service.CompanyService;
import com.microservice.util.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CompanyServiceImpl extends BaseServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    @Override
    public Map save(T_CompanyDto dto) {
        T_Company company = setModel(dto, new T_Company());
        //--------------------------------------------------------------------------------------------------------------
        company = companyRepo.save(company);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNullOrEmpty(company.getCode())){

        }

        return null;
    }

    @Override
    public Map update(T_CompanyDto dto) {
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

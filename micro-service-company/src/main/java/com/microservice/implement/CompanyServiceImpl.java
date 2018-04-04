package com.microservice.implement;

import com.microservice.dto.CompanyRegistrationDto;
import com.microservice.dto.T_CompanyDto;
import com.microservice.dto.T_CompanyProfileDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Company;
import com.microservice.repository.CompanyRepo;
import com.microservice.service.CompanyProfileService;
import com.microservice.service.CompanyService;
import com.microservice.util.CommonUtil;
import com.microservice.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class CompanyServiceImpl extends BaseServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    @Autowired
    private CompanyProfileService companyProfileService;

    @Override
    @Transactional(readOnly = false)
    public Map save(T_CompanyDto dto) {
        T_Company company = setModel(dto, new T_Company());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(T_CompanyDto dto) {
        T_Company company = setModel(dto,
                companyRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    public Map delete(String primary) {
        T_Company company = setModel(
                companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        company.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    public Map getOne(String primary) {
        T_Company company = setModel(
                companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Company> companies =
                companyRepo.findByStatusEnabledAndCompanyIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companies);
    }

    @Override
    @Transactional(readOnly = false)
    public Map registration_add(CompanyRegistrationDto dto){
        Map<String, Object> company = save(dto.getCompany());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)) {
            T_CompanyProfileDto companyProfileDto = dto.getCompanyProfile();
            //----------------------------------------------------------------------------------------------------------
            companyProfileDto.setCompanyCode((String)company.get("code"));
            //----------------------------------------------------------------------------------------------------------
            companyProfileService.save(companyProfileDto);
        }
        return company;
    }

    @Override
    @Transactional(readOnly = false)
    public Map registration_update(CompanyRegistrationDto dto){
        Map<String, Object> company = update(dto.getCompany());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)) {
            T_CompanyProfileDto companyProfileDto = dto.getCompanyProfile();
            //----------------------------------------------------------------------------------------------------------
            companyProfileDto.setCompanyCode((String)company.get("code"));
            //----------------------------------------------------------------------------------------------------------
            companyProfileService.update(companyProfileDto);
        }
        return company;
    }

    @Override
    @Transactional(readOnly = false)
    public Map registration_delete(CompanyRegistrationDto dto){
        Map<String, Object> company = delete(dto.getCompany().getCode());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)) {
            companyProfileService.delete(dto.getCompanyProfile().getCode());
        }
        return company;
    }
}

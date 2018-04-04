package com.microservice.implement;

import com.microservice.dto.T_CompanyProfileDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_CompanyProfile;
import com.microservice.repository.CompanyProfileRepo;
import com.microservice.service.CompanyProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class CompanyProfileServiceImpl extends BaseServiceImpl implements CompanyProfileService {

    @Autowired
    private CompanyProfileRepo companyProfileRepo;

    @Override
    @Transactional(readOnly = false)
    public Map save(T_CompanyProfileDto dto) {
        T_CompanyProfile companyProfile = setModel(dto, new T_CompanyProfile());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyProfileRepo.save(companyProfile));
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(T_CompanyProfileDto dto) {
        T_CompanyProfile companyProfile = setModel(dto,
                companyProfileRepo.findByStatusEnabledAndCode(true, dto.getCode()));

        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyProfileRepo.save(companyProfile));
    }

    @Override
    public Map delete(String primary) {
        T_CompanyProfile companyProfile = setModel(
                companyProfileRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        companyProfile.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyProfileRepo.save(companyProfile));
    }

    @Override
    public Map getOne(String primary) {
        T_CompanyProfile companyProfile = setModel(
                companyProfileRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyProfile);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_CompanyProfile> companyProfiles =
                companyProfileRepo.findByStatusEnabledAndAddressIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyProfiles);
    }
}

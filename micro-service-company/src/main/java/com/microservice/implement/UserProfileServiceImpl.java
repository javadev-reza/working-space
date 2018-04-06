package com.microservice.implement;

import com.microservice.dto.T_UserProfileDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_UserProfile;
import com.microservice.repository.UserProfileRepo;
import com.microservice.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserProfileServiceImpl extends BaseServiceImpl implements UserProfileService {

    @Autowired
    private UserProfileRepo userProfileRepo;

    @Override
    public Map save(T_UserProfileDto dto) {
        T_UserProfile userProfile = setModel(dto, new T_UserProfile());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userProfileRepo.save(userProfile));
    }

    @Override
    public Map update(T_UserProfileDto dto) {
        T_UserProfile userProfile = setModel(dto,
                userProfileRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userProfileRepo.save(userProfile));
    }

    @Override
    public Map delete(String primary) {
        T_UserProfile userProfile = setModel(
                userProfileRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        userProfile.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userProfileRepo.save(userProfile));
    }

    @Override
    public Map getOne(String primary) {
        T_UserProfile userProfile = setModel(
                userProfileRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userProfile);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_UserProfile> userProfiles =
                userProfileRepo.findByStatusEnabledAndAddressIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userProfiles);
    }
}

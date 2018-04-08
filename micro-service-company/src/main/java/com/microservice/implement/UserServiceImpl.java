package com.microservice.implement;

import com.microservice.dto.UserRegistrationDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_User;
import com.microservice.model.T_UserProfile;
import com.microservice.service.UserService;
import com.microservice.util.CommonUtil;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService {


    @Override
    @Transactional(readOnly = false)
    public Map save(UserRegistrationDto dto) {
        T_User user = userRepo.save(setModel(dto.getUser(), new T_User()));
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(user) && CommonUtil.isNotNullOrEmpty(dto.getUserProfile())){
            //----------------------------------------------------------------------------------------------------------
            dto.getUserProfile().setUserCode(user.getCode());
            //----------------------------------------------------------------------------------------------------------
            userProfileRepo.save(setModel(dto.getUserProfile(), new T_UserProfile()));
        }
        return setResult(user);
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(UserRegistrationDto dto) {
        T_User user = setModel(dto, setModel(dto,
                userRepo.findByStatusEnabledAndCode(true, dto.getUser().getCode())));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userRepo.save(user));
    }

    @Override
    public Map delete(String primary) {
        T_User user = setModel(userRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        user.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        user = userRepo.save(user);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(userRepo.save(user))) {
            T_UserProfile userProfile = userProfileRepo.findByStatusEnabledAndUserCode(true, user.getCode());
            //----------------------------------------------------------------------------------------------------------
            userProfile.setStatusEnabled(false);
            //----------------------------------------------------------------------------------------------------------
            userProfileRepo.save(userProfile);
        }
        return setResult(user);
    }

    @Override
    public Map getOne(String primary) {
        T_User user = setModel(
                userRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(user);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_User> users = userRepo.findByStatusEnabledAndUserNameIgnoreCaseContaining(
                setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(users);
    }
}

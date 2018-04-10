package com.microservice.implement;

import com.microservice.dto.T_UserDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_User;
import com.microservice.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService {

    @Override
    public Map save(T_UserDto dto) {
        T_User user = userRepo.save(setModel(dto, new T_User()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userRepo.save(user));
    }

    @Override
    public Map update(T_UserDto dto) {
        T_User user = setModel(dto,
                userRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userRepo.save(user));
    }

    @Override
    @Transactional(readOnly = false)
    public Map delete(String primary) {
        T_User user = setModel(
                userRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        user.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(userRepo.save(user));
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

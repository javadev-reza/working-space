package com.microservice.implement;

import com.microservice.dto.T_RoleDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Role;
import com.microservice.repository.RoleRepo;
import com.microservice.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class RoleServiceImpl extends BaseServiceImpl implements RoleService{


    @Override
    @Transactional(readOnly = false)
    public Map save(T_RoleDto dto) {
        T_Role role = setModel(dto, new T_Role());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(T_RoleDto dto) {
        T_Role role = setModel(dto,
                roleRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    public Map delete(String primary) {
        T_Role role = setModel(
                roleRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        role.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    public Map getOne(String primary) {
        T_Role role = setModel(
                roleRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(role);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Role> roles =
                roleRepo.findByStatusEnabledAndCompanyCodeAndRoleIgnoreCaseContaining(
                        setPageRequest(pageDto), true, getSession().getRole().getCode(), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roles);
    }
}

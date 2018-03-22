package com.microservice.implement;

import com.microservice.dto.M_RoleDto;
import com.microservice.model.M_Role;
import com.microservice.model.PageDto;
import com.microservice.repository.RoleRepo;
import com.microservice.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RoleServiceImpl extends BaseServiceImpl implements RoleService {

    @Autowired
    private RoleRepo roleRepo;

    @Override
    public Map save(M_RoleDto dto) {
        M_Role role = setModel(dto, new M_Role());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    public Map update(M_RoleDto dto) {
        M_Role role = setModel(dto,
                roleRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    public Map delete(Integer primary) {
        M_Role role = setModel(
                roleRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roleRepo.save(role));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Role role = setModel(
                roleRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(role);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Role> roles =
                roleRepo.findByStatusEnabledAndRoleIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(roles);
    }
}

package com.microservice.repository;

import com.microservice.model.M_Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<M_Role, Integer> {
    M_Role findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Role> findByStatusEnabledAndRoleIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String role);
}

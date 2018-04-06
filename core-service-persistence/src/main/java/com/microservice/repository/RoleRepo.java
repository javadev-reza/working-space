package com.microservice.repository;

import com.microservice.model.M_Religion;
import com.microservice.model.T_Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<T_Role, String> {
    T_Role findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    Page<T_Role> findByStatusEnabledAndCompanyCodeAndRoleIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String companyCode, String role);
}

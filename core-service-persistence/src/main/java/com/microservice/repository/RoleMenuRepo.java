package com.microservice.repository;

import com.microservice.model.T_RoleMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleMenuRepo extends JpaRepository<T_RoleMenu, String> {
    T_RoleMenu findByStatusEnabledAndRoleCode(Boolean statusEnabled, String roleCode);
}

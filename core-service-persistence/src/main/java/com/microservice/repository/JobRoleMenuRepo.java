package com.microservice.repository;

import com.microservice.model.T_JobRoleMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRoleMenuRepo extends JpaRepository<T_JobRoleMenu, String> {
    T_JobRoleMenu findByStatusEnabledAndJobRoleCode(Boolean statusEnabled, String jobRoleCode);
}

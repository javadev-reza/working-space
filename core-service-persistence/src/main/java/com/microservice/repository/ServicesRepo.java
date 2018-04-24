package com.microservice.repository;

import com.microservice.model.T_Services;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepo extends JpaRepository<T_Services, String> {
    T_Services findByStatusEnabledAndProductEmployeeRoleCompanyCodeAndCode(Boolean statusEnabled, String companyCode, String code);
    Page<T_Services> findByStatusEnabledAndProductEmployeeRoleCompanyCodeAndProductProductIgnoreCaseContaining(
            Pageable pageable, Boolean statusEnabled, String companyCode, String product);

}

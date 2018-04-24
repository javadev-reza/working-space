package com.microservice.repository;

import com.microservice.model.T_Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepo extends JpaRepository<T_Company, String> {
    T_Company findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    T_Company findByStatusEnabledAndCompanyOrEmailAddress(Boolean statusEnabled, String company, String emailAddress);
    Page<T_Company> findByStatusEnabledAndCompanyIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String company);
}

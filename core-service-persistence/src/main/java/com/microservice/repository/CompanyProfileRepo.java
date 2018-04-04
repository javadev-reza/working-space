package com.microservice.repository;

import com.microservice.model.T_CompanyProfile;
import com.microservice.model.T_UserProfile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyProfileRepo extends JpaRepository<T_CompanyProfile, String> {
    T_CompanyProfile findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    Page<T_CompanyProfile> findByStatusEnabledAndAddressIgnoreCaseContaining(Pageable pegeable, Boolean statusEnabled, String address);
}

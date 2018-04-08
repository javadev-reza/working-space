package com.microservice.repository;

import com.microservice.model.T_UserProfile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepo extends JpaRepository<T_UserProfile, String> {
    T_UserProfile findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    T_UserProfile findByStatusEnabledAndUserCode(Boolean statusEnabled, String userCode);
    Page<T_UserProfile> findByStatusEnabledAndAddressIgnoreCaseContaining(Pageable pegeable, Boolean statusEnabled, String address);
}

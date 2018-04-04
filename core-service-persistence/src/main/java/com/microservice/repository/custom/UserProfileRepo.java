package com.microservice.repository.custom;

import com.microservice.model.T_UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepo extends JpaRepository<T_UserProfile, String> {

}

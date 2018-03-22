package com.microservice.repository;

import com.microservice.model.T_Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo extends JpaRepository<T_Profile, String> {

}

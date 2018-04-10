package com.microservice.repository;

import com.microservice.model.T_Services;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepo extends JpaRepository<T_Services, String> {

}

package com.microservice.repository;

import com.microservice.model.M_Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ApplicationRepository extends JpaRepository<M_Application, Integer>{
    M_Application findByApplication(String application);
}

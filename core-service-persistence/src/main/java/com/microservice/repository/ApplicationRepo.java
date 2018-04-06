package com.microservice.repository;

import com.microservice.model.M_Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author reza
 */
@Repository
public interface ApplicationRepo extends JpaRepository<M_Application, Integer>{
    M_Application findByStatusEnabledAndApplication(Boolean statusEnabled, String application);
    List<M_Application> findAllByStatusEnabledAndModulId(Boolean statusEnabled, Integer modulId);
}

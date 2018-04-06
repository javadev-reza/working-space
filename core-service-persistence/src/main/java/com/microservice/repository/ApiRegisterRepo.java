package com.microservice.repository;

import com.microservice.model.M_ApiRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author reza
 */
@Repository
public interface ApiRegisterRepo extends JpaRepository<M_ApiRegister, Integer>{
    M_ApiRegister findByStatusEnabledAndLink(Boolean statusEnabled, String link);
    List<M_ApiRegister> findAllByStatusEnabledAndApplicationId(Boolean statusEnabled, Integer applicationId);
}

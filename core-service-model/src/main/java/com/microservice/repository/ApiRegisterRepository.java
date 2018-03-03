package com.microservice.repository;

import com.microservice.model.M_ApiRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ApiRegisterRepository extends JpaRepository<M_ApiRegister, Integer>{
    M_ApiRegister findByLink(String link);
}

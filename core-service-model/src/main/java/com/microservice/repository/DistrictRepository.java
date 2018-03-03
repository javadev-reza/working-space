package com.microservice.repository;

import com.microservice.model.M_District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface DistrictRepository extends JpaRepository<M_District, Integer>{
    
}

package com.microservice.repository;

import com.microservice.model.M_CityOrRegency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface CityOrRegencyRepository extends JpaRepository<M_CityOrRegency, Integer>{
    
}

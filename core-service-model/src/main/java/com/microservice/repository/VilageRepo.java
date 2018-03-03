package com.microservice.repository;

import com.microservice.model.M_Vilage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface VilageRepo extends JpaRepository<M_Vilage, Integer>{
    
}

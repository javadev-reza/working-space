package com.microservice.repository;

import com.microservice.model.M_Religion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ReligionRepo extends JpaRepository<M_Religion, Integer>{
    
}

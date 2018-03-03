package com.microservice.repository;

import com.microservice.model.M_Gender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface GenderRepo extends JpaRepository<M_Gender, Integer>{
    
}

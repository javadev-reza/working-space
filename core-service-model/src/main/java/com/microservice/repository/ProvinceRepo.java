package com.microservice.repository;

import com.microservice.model.M_Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ProvinceRepo extends JpaRepository<M_Province, Integer>{
    
}

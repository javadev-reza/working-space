package com.microservice.repository;

import com.microservice.model.M_Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface LanguageRepo extends JpaRepository<M_Language, Integer>{
    
}

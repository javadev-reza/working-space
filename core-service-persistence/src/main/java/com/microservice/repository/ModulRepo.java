package com.microservice.repository;

import com.microservice.model.M_Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ModulRepo extends JpaRepository<M_Modul, Integer>{
    M_Modul findByStatusEnabledAndModul(Boolean statusEnabled, String modul);
}

package com.microservice.repository;

import com.microservice.model.M_Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author reza
 */
@Repository
public interface ModulRepo extends JpaRepository<M_Modul, Integer>{
    M_Modul findByStatusEnabledAndModul(Boolean statusEnabled, String modul);
    List<M_Modul> findByStatusEnabledAndIdIsIn(Boolean statusEnabled, List<Integer> id);
}

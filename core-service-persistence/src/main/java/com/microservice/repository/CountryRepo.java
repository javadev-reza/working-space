package com.microservice.repository;

import com.microservice.model.M_Country;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface CountryRepo extends JpaRepository<M_Country, Integer>{
    M_Country findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Country> findAllByStatusEnabledAndCountryIgnoreCaseContaining(Pageable pegeable, Boolean statusEnabled, String country);
}

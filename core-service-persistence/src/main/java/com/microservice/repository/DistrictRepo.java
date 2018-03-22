package com.microservice.repository;

import com.microservice.model.M_District;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author reza
 */
@Repository
public interface DistrictRepo extends JpaRepository<M_District, Integer> {
    M_District findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_District> findByStatusEnabledAndCountyTownIdIsInAndDistrictIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, List<Integer> countyTownId, String district);
}

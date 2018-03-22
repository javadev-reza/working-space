package com.microservice.repository;

import com.microservice.model.M_Vilage;
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
public interface VilageRepo extends JpaRepository<M_Vilage, Integer> {
    M_Vilage findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Vilage> findByStatusEnabledAndDistrictIdIsInAndVilageIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, List<Integer> districtId, String vilage);
}

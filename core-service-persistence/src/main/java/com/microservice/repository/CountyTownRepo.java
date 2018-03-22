package com.microservice.repository;

import com.microservice.model.M_CountyTown;
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
public interface CountyTownRepo extends JpaRepository<M_CountyTown, Integer> {
    M_CountyTown findByStatusEnabledAndId(Boolean StatusEnabled, Integer id);
    Page<M_CountyTown> findByStatusEnabledAndProvinceIdIsInOrCountyTownIgnoreCaseContaining(Pageable pageable, Boolean StatusEnabled, List<Integer> provinceId, String countyTown);
}

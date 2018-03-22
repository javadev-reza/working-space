package com.microservice.repository;

import com.microservice.model.M_Province;
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
public interface ProvinceRepo extends JpaRepository<M_Province, Integer> {
    M_Province findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Province> findByStatusEnabledAndCountryIdIsInAndProvinceIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, List<Integer> countryId, String province);
}

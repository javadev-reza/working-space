package com.microservice.repository;

import com.microservice.model.M_Religion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface ReligionRepo extends JpaRepository<M_Religion, Integer>{
    M_Religion findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Religion> findByStatusEnabledAndReligionIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String religion);
}

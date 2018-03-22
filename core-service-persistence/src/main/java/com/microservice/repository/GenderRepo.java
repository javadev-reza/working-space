package com.microservice.repository;

import com.microservice.model.M_Gender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface GenderRepo extends JpaRepository<M_Gender, Integer>{
    M_Gender findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Gender> findByStatusEnabledAndGenderIgnoreCaseContaining(Pageable pageable, Boolean statusEnablde, String gender);
}

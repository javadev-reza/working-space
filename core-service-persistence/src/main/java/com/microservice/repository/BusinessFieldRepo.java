package com.microservice.repository;

import com.microservice.model.M_BusinessField;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessFieldRepo extends JpaRepository<M_BusinessField, Integer> {
    M_BusinessField findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_BusinessField> findByStatusEnabledAndBusinessFieldIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String businessField);
}

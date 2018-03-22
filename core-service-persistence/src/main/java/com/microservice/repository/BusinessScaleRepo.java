package com.microservice.repository;

import com.microservice.model.M_BusinessScale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessScaleRepo extends JpaRepository<M_BusinessScale, Integer> {
    M_BusinessScale findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_BusinessScale> findByStatusEnabledAndBusinessScaleIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String businessScale);
}

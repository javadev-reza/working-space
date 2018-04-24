package com.microservice.repository;

import com.microservice.model.T_Product;
import com.microservice.model.T_ProductDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDetailRepo extends JpaRepository<T_ProductDetail, String>{
    T_ProductDetail findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    Page<T_ProductDetail> findByStatusEnabledAndPacketIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String packet);
}

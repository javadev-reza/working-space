package com.microservice.repository;

import com.microservice.model.M_OrderStatus;
import com.microservice.model.T_Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<T_Product, String>{
    T_Product findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    Page<T_Product> findByStatusEnabledAndProductIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String product);
}

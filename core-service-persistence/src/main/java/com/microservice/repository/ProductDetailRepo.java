package com.microservice.repository;

import com.microservice.model.T_ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDetailRepo extends JpaRepository<T_ProductDetail, String>{

}

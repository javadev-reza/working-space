package com.microservice.repository;

import com.microservice.model.T_Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepo extends JpaRepository<T_Company, String> {

}

package com.microservice.repository;

import com.microservice.model.T_AdministrativeDivision;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrativeDivisionRepo extends JpaRepository<T_AdministrativeDivision, String> {

}

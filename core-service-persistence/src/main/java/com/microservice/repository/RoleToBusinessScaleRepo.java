package com.microservice.repository;

import com.microservice.model.T_RoleToBusinessScale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleToBusinessScaleRepo extends JpaRepository<T_RoleToBusinessScale, String> {

}

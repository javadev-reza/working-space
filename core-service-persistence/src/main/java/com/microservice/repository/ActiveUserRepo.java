package com.microservice.repository;

import com.microservice.model.T_ActiveUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActiveUserRepo extends JpaRepository<T_ActiveUser, String>{
    T_ActiveUser findAllByStatusEnabledAndUserCode(Boolean statusEnabled, String userCode);
}

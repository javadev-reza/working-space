package com.microservice.repository;

import com.microservice.model.T_MapMenuToUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapMenuToUserRepository extends JpaRepository<T_MapMenuToUser, String> {
    T_MapMenuToUser findByLoginUserCode(String loginUserCode);
}

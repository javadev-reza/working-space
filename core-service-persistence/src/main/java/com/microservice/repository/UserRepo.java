package com.microservice.repository;

import com.microservice.model.T_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Reza
 */
@Repository
public interface UserRepo extends JpaRepository<T_User, String>{
    T_User findByStatusEnabledAndUserName(Boolean statusEnabled, String userName);
}

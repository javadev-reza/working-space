package com.microservice.repository;

import com.microservice.model.T_LoginUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Reza
 */
@Repository
public interface LoginUserRepository extends JpaRepository<T_LoginUser, String>{

    T_LoginUser findByUserNameAndStatusEnabled(String userName, Boolean statusEnabled);

}

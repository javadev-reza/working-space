package com.microservice.repository;

import com.microservice.model.T_User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Reza
 */
@Repository
public interface UserRepo extends JpaRepository<T_User, String>{
    T_User findByStatusEnabledAndUserName(Boolean statusEnabled, String userName);
    T_User findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    Page<T_User> findByStatusEnabledAndUserNameIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String userName);
}

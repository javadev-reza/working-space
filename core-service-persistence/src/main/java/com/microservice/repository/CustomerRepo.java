package com.microservice.repository;

import com.microservice.model.T_Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface CustomerRepo extends JpaRepository<T_Customer, String> {

}

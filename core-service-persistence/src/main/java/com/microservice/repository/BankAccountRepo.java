package com.microservice.repository;

import com.microservice.model.T_BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankAccountRepo extends JpaRepository<T_BankAccount, String>{

}

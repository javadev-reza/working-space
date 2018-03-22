package com.microservice.repository;

import com.microservice.model.M_Bank;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepo extends JpaRepository<M_Bank, Integer> {
    M_Bank findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_Bank> findAllByStatusEnabledAndBankIgnoreCaseContaining(Pageable pegeable, Boolean statusEnabled, String bank);
}

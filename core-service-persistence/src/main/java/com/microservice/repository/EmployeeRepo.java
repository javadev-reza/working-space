package com.microservice.repository;

import com.microservice.model.T_Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<T_Employee, String> {
    T_Employee findByStatusEnabledAndCode(Boolean statusEnabled, String code);
    T_Employee findByStatusEnabledAndUserCode(Boolean statusEnabled, String userCode);
    Page<T_Employee> findByStatusEnabledAndFirstNameIgnoreCaseContaining(Pageable pegeable, Boolean statusEnabled, String firstName);
}

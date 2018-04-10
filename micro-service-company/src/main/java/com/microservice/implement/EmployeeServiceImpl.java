package com.microservice.implement;

import com.microservice.dto.T_EmployeeDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Employee;
import com.microservice.service.EmployeeService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EmployeeServiceImpl extends BaseServiceImpl implements EmployeeService {

    @Override
    public Map save(T_EmployeeDto dto) {
        T_Employee employee = setModel(dto, new T_Employee());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(employeeRepo.save(employee));
    }

    @Override
    public Map update(T_EmployeeDto dto) {
        T_Employee employee = setModel(dto,
                employeeRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(employeeRepo.save(employee));
    }

    @Override
    public Map delete(String primary) {
        T_Employee employee = setModel(
                employeeRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        employee.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(employeeRepo.save(employee));
    }

    @Override
    public Map getOne(String primary) {
        T_Employee employee = setModel(
                employeeRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(employee);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Employee> employees =
                employeeRepo.findByStatusEnabledAndFirstNameIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(employees);
    }
}

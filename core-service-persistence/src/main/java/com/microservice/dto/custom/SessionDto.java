package com.microservice.dto.custom;

import com.microservice.dto.T_CompanyDto;
import com.microservice.dto.T_EmployeeDto;
import com.microservice.dto.T_RoleDto;
import com.microservice.dto.T_UserDto;
import com.microservice.model.T_Company;
import com.microservice.model.T_Role;
import com.microservice.model.T_User;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class SessionDto {

    private String from;

    private T_CompanyDto company;

    private T_RoleDto role;

    private T_UserDto user;

    private T_EmployeeDto employee;
}

package com.microservice.dto;

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
}

package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class SessionDto {

    private String client;

    private String userCode;

    private String profileCode;

    private String jobRoleCode;

    private String userName;

    private String password;


}

package com.microservice.model.dto;

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

    private String authCode;

    private String userName;

    private String password;

    private Integer roleUserId;
}

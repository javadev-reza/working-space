package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class UserRegistrationDto {

    private T_UserDto user;

    private T_UserProfileDto userProfile;
}

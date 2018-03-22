package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

@Getter
@Setter
public class SignUpMobileDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String firstName;

    private String lastName;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    @NotNull(message = COLUMN_NOT_NULL)
    private String userName;

    @NotNull(message = COLUMN_NOT_NULL)
    private String password;
}

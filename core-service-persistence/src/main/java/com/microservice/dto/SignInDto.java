package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class SignInDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String userName;

    @NotNull(message = COLUMN_NOT_NULL)
    private String password;
}

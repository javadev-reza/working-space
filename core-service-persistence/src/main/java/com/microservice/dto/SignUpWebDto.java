package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpWebDto {

    private T_UserDto user;

    private T_ProfileDto profile;

    private T_AdministrativeDivisionDto administrativeDivision;

    private T_BankAccountDto bankAccount;
}

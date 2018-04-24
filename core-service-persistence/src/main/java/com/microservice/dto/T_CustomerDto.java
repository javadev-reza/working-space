package com.microservice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.microservice.model.BaseTransactionDto;
import com.microservice.model.M_Gender;
import com.microservice.model.T_User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_CustomerDto extends BaseTransactionDto {

    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String firstName;

    private String lastName;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    private Integer genderId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Date dateJoined;
}

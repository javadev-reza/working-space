package com.microservice.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.microservice.model.*;
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
public class T_UserProfileDto extends BaseTransactionDto {

    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String firstName;

    private String lastName;

    private String address;

    private String postalCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    private Integer genderId;

    private Integer religionId;

    private Date dateOfBirt;

    private Date placeOfBirt;

    @NotNull(message = COLUMN_NOT_NULL)
    private Date dateJoined;
}

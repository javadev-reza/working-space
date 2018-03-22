package com.microservice.dto;

import com.microservice.model.BaseTransactionDto;
import com.microservice.model.M_Gender;
import com.microservice.model.M_Religion;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.util.Date;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_ProfileDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String firstName;

    private String lastName;

    @NotNull(message = COLUMN_NOT_NULL)
    private String address;

    private String postalCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer genderId;

    private Integer religionId;

    private Date dateOfBirt;

    private Date placeOfBirt;

}

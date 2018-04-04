package com.microservice.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.microservice.model.BaseTransactionDto;
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
public class T_CompanyProfileDto extends BaseTransactionDto {

    private String companyCode;

    private String address;

    private String postalCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    @NotNull(message = COLUMN_NOT_NULL)
    private Date dateJoined;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countryId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer provinceId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countyTownId;

    private Integer districtId;

    private Integer vilageId;
}

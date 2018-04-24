package com.microservice.dto;

import com.microservice.model.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

import java.util.Date;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_CompanyDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String company;

    private String branchCompanyCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countryId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer provinceId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countyTownId;

    private Integer districtId;

    private Integer vilageId;

    private String address;

    private String postalCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String emailAddress;

    @NotNull(message = COLUMN_NOT_NULL)
    private Date dateJoined;

}

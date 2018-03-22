package com.microservice.dto;

import com.microservice.model.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_AdministrativeDivisionDto extends BaseTransactionDto{

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countryId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer provinceId;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countyTownId;

    private Integer districtId;

    private Integer vilageId;
}

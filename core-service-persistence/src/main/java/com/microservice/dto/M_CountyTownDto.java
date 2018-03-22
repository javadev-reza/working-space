package com.microservice.dto;

import com.microservice.model.BaseMasterDto;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class M_CountyTownDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer provinceId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String countyTown;
}

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
public class M_ProvinceDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer countryId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String province;

}

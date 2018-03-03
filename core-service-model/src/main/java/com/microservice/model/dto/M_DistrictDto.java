package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class M_DistrictDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer cityId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String district;
}

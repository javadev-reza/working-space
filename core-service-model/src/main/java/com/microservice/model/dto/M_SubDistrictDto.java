package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import com.microservice.model.dto.BaseMasterDto;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class M_SubDistrictDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer districtId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String subDistrict;
}

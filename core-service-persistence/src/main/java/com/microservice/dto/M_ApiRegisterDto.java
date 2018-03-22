package com.microservice.dto;

import com.microservice.model.BaseMasterDto;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class M_ApiRegisterDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer applicationId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String api;

    @NotNull(message = COLUMN_NOT_NULL)
    private String link;

    @NotNull(message = COLUMN_NOT_NULL)
    private String method;
}

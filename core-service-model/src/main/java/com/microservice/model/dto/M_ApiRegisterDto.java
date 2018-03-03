package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class M_ApiRegisterDto extends BaseMasterDto{

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer applicationId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String api;

    @NotNull(message = COLUMN_NOT_NULL)
    private String link;

    @NotNull(message = COLUMN_NOT_NULL)
    private String method;
}

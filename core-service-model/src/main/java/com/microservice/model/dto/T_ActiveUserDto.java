package com.microservice.model.dto;

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
public class T_ActiveUserDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String loginUserCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private Boolean activeStatus;
}

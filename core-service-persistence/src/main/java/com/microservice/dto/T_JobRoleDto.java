package com.microservice.dto;

import com.microservice.model.BaseTransactionDto;
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
public class T_JobRoleDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String jobRole;

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer roleId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String companyCode;
}

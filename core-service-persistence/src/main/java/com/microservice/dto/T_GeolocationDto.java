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
public class T_GeolocationDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private Double latitude;

    @NotNull(message = COLUMN_NOT_NULL)
    private Double langitude;

    private byte[] radius;

    private Double accuracy;
}

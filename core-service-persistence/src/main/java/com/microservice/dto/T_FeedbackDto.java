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
public class T_FeedbackDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String servicesCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private Double ratting;

    @NotNull(message = COLUMN_NOT_NULL)
    private String suggestion;

    @NotNull(message = COLUMN_NOT_NULL)
    private String critics;
}

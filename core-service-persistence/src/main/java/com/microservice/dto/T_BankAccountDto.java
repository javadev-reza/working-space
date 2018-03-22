package com.microservice.dto;

import com.microservice.model.BaseTransactionDto;
import com.microservice.model.M_Bank;
import com.microservice.model.T_Profile;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_BankAccountDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private Integer bankId;

    @NotNull(message = COLUMN_NOT_NULL)
    private String accountNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    private String onBehalfOf;
}

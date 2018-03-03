package com.microservice.model.dto;


import com.microservice.model.BaseTransaction;
import com.microservice.model.T_LoginUser;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_MapMenuToUserDto extends BaseTransactionDto{

    @NotNull(message = COLUMN_NOT_NULL)
    private String loginUserCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private String menuList;
}

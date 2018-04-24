package com.microservice.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.microservice.model.BaseTransaction;
import com.microservice.model.BaseTransactionDto;
import com.microservice.model.T_Employee;
import com.microservice.model.T_User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class T_ProductDto extends BaseTransactionDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String product;

    private String employeeCode;

    @NotNull(message = COLUMN_NOT_NULL)
    private Double price;

    private Double discount;

    private Date discountExp;

    private Double promo;

    private Date promoExp;

    private Double tax;

    private List<T_ProductDetailDto> productDetail;
}

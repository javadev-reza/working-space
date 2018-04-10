package com.microservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.util.Date;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@Entity
@Table(name="T_Product")
public class T_Product extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "product", length = 100, nullable = false)
    private String product;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userCode", insertable = false, updatable = false)
    private T_Employee employee;

    @Column(name = "employeeCode", length = 32, nullable = true)
    private String employeeCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "discount", nullable = true)
    private Double discount;

    @Column(name = "discountExp", nullable = true)
    private Date discountExp;

    @Column(name = "promo", nullable = true)
    private Double promo;

    @Column(name = "promoExp", nullable = true)
    private Date promoExp;

    @Column(name = "tax", nullable = true)
    private Double tax;
}

package com.microservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Entity
@Table(name="T_Services")
public class T_Services extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productCode", insertable = false, updatable = false)
    private T_Product product;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "productCode", length = 32, nullable = false)
    private String productCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerCode", insertable = false, updatable = false)
    private T_Customer customer;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "customerCode", length = 32, nullable = false)
    private String customerCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orderStatusId", insertable = false, updatable = false)
    private M_OrderStatus orderStatus;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "orderStatusId", nullable = false)
    private Integer orderStatusId;
}

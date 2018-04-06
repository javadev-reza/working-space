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
@Table(name="T_ProductDetail")
public class T_ProductDetail extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productCode", insertable = false, updatable = false)
    private T_Product product;

    @Column(name = "productCode", length = 32, nullable = true)
    private String productCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "packet", length = 100, nullable = false)
    private String packet;
}

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
@Table(name="T_BankAccount")
public class T_BankAccount extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profileCode", insertable = false, updatable = false)
    private T_Profile profile;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "profileCode", length = 32, nullable = false)
    private String profileCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bankId", insertable = false, updatable = false)
    private M_Bank bank;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "bankId", nullable = false)
    private Integer bankId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "accountNumber", nullable = false)
    private String accountNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "onBehalfOf", nullable = false)
    private String onBehalfOf;
}

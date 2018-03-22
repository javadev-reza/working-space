package com.microservice.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@Entity
@Table(name="M_Bank")
public class M_Bank extends BaseMaster {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "bank", nullable = false)
    private String bank;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "virtualAccount", nullable = false)
    private String virtualAccount;
}

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
@Table(name="T_Role")
public class T_Role extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "role", length = 50, nullable = false)
    private String role;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "companyCode", insertable = false, updatable = false)
    private T_Company company;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "companyCode", length = 32, nullable = false)
    private String companyCode;

}

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
@Table(name="T_JobRole")
public class T_JobRole extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "jobRole", length = 50, nullable = false)
    private String jobRole;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleId", insertable = false, updatable = false)
    private M_Role role;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "roleId", nullable = false)
    private Integer roleId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "companyCode", insertable = false, updatable = false)
    private T_Company company;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "companyCode", length = 32, nullable = false)
    private String companyCode;
}

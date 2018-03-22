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
@Table(name="T_RoleToBusinessScale")
public class T_RoleToBusinessScale extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "businessScaleId", insertable = false, updatable = false)
    private M_BusinessScale businessScale;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "businessScaleId", nullable = false)
    private Integer businessScaleId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleId", insertable = false, updatable = false)
    private M_Role role;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "roleId", nullable = false)
    private Integer roleId;

}

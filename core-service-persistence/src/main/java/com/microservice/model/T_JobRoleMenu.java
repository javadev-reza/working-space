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
@Table(name="T_JobRoleMenu")
public class T_JobRoleMenu extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jobRoleCode", insertable = false, updatable = false)
    private T_JobRole jobRole;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "jobRoleCode", length = 32, nullable = false)
    private String jobRoleCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "menuList", nullable = false)
    private String menuList;
}

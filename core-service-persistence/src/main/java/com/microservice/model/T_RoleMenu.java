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
@Table(name="T_RoleMenu")
public class T_RoleMenu extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleCode", insertable = false, updatable = false)
    private T_Role role;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "roleCode", length = 32, nullable = false)
    private String roleCode;

    @Lob
    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "menuList", nullable = false)
    private String menuList;
}

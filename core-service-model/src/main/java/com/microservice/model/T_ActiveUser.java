package com.microservice.model;

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
@Table(name = "T_ActiveUser")
public class T_ActiveUser extends BaseTransaction{

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loginUserCode", insertable = false, updatable = false)
    private T_LoginUser loginUser;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "loginUserCode", nullable = false)
    private String loginUserCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "activeStatus", nullable = false)
    private Boolean activeStatus;
}

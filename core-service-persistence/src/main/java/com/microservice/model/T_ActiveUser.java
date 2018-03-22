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
@Table(name="T_ActiveUser")
public class T_ActiveUser extends BaseTransaction {

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userCode", insertable = false, updatable = false)
    private T_User user;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "userCode", length = 32, nullable = false)
    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "activeStatus", nullable = false)
    private Boolean activeStatus;
}

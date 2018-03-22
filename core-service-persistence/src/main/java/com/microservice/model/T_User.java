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
@Table(name="T_User")
public class T_User extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profileCode", insertable = false, updatable = false)
    private T_Profile profile;

    @Column(name = "profileCode", length = 32, nullable = true)
    private String profileCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jobRoleCode", insertable = false, updatable = false)
    private T_JobRole jobRole;

    @Column(name = "jobRoleCode", length = 32, nullable = true)
    private String jobRoleCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "userName", length = 50, nullable = false)
    private String userName;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "password", length = 50, nullable = false)
    private String password;

}

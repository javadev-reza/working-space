package com.microservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.util.Date;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@Entity
@Table(name="T_Customer")
public class T_Customer extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userCode", insertable = false, updatable = false)
    private T_User user;

    @Column(name = "userCode", length = 32, nullable = true)
    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "firstName", length = 50, nullable = false)
    private String firstName;

    @Column(name = "lastName", length = 50, nullable = true)
    private String lastName;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "phoneNumber", length = 30, nullable = false)
    private String phoneNumber;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "emailAddress", length = 30, nullable = false)
    private String emailAddress;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genderId", insertable = false, updatable = false)
    private M_Gender gender;

    @Column(name = "genderId", nullable = true)
    private Integer genderId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "dateJoined", nullable = false)
    private Date dateJoined;
}

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
@Table(name="T_Profile")
public class T_Profile extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "firstName", length = 50, nullable = false)
    private String firstName;

    @Column(name = "lastName", length = 50, nullable = true)
    private String lastName;

    @Column(name = "address", length = 50, nullable = true)
    private String address;

    @Column(name = "postalCode", length = 10, nullable = true)
    private String postalCode;

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

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "religionId", insertable = false, updatable = false)
    private M_Religion religion;

    @Column(name = "religionId", nullable = true)
    private Integer religionId;

    @Column(name = "dateOfBirt", nullable = true)
    private Date dateOfBirt;

    @Column(name = "placeOfBirt", nullable = true)
    private Date placeOfBirt;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "dateJoined", nullable = false)
    private Date dateJoined;
}

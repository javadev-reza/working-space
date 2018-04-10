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
@Table(name="T_Employee")
public class T_Employee extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userCode", insertable = false, updatable = false)
    private T_User user;

    @Column(name = "userCode", length = 32, nullable = true)
    private String userCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleCode", insertable = false, updatable = false)
    private T_Role role;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "roleCode", length = 32, nullable = false)
    private String roleCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "firstName", length = 50, nullable = false)
    private String firstName;

    @Column(name = "lastName", length = 50, nullable = true)
    private String lastName;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countryId", insertable = false, updatable = false)
    private M_Country country;

    @Column(name = "countryId", nullable = true)
    private Integer countryId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinceId", insertable = false, updatable = false)
    private M_Province province;

    @Column(name = "provinceId", nullable = true)
    private Integer provinceId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countyTownId", insertable = false, updatable = false)
    private M_CountyTown countyTown;

    @Column(name = "countyTownId", nullable = true)
    private Integer countyTownId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "districtId", insertable = false, updatable = false)
    private M_District district;

    @Column(name = "districtId", nullable = true)
    private Integer districtId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vilageId", insertable = false, updatable = false)
    private M_Vilage vilage;

    @Column(name = "vilageId", nullable = true)
    private Integer vilageId;

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

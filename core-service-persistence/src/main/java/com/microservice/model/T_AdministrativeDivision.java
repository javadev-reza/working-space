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
@Table(name="T_AdministrativeDivision")
public class T_AdministrativeDivision extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profileCode", insertable = false, updatable = false)
    private T_Profile profile;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "profileCode", length = 32, nullable = false)
    private String profileCode;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countryId", insertable = false, updatable = false)
    private M_Country country;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "countryId", nullable = false)
    private Integer countryId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinceId", insertable = false, updatable = false)
    private M_Province province;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "provinceId", nullable = false)
    private Integer provinceId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countyTownId", insertable = false, updatable = false)
    private M_CountyTown countyTown;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "countyTownId", nullable = false)
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

}

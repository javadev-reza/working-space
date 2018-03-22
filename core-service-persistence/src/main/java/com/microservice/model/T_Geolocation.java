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
@Table(name="T_Geolocation")
public class T_Geolocation extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userCode", insertable = false, updatable = false)
    private T_User user;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "userCode", length = 32, nullable = false)
    private String userCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "langitude", nullable = false)
    private Double langitude;

    @Column(name = "radius", nullable = true)
    private byte[] radius;

    @Column(name = "accuracy", nullable = true)
    private Double accuracy;
}

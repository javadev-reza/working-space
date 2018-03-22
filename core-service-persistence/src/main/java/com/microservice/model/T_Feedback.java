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
@Table(name="T_Feedback")
public class T_Feedback extends BaseTransaction {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "servicesCode", insertable = false, updatable = false)
    private T_Services services;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "servicesCode", length = 32, nullable = false)
    private String servicesCode;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "ratting", nullable = false)
    private Double ratting;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "suggestion", length = 225, nullable = false)
    private String suggestion;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "critics", length = 225, nullable = false)
    private String critics;
}

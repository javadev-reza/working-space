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
@Table(name="M_District")
public class M_District extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countyTownId", insertable = false, updatable = false)
    private M_CountyTown countyTown;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "countyTownId", nullable = false)
    private Integer countyTownId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "district", length = 50, nullable = false)
    private String district;
}

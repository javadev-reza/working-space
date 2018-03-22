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
@Table(name="M_Vilage")
public class M_Vilage extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "districtId", insertable = false, updatable = false)
    private M_District district;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "districtId", nullable = false)
    private Integer districtId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "vilage", length = 50, nullable = false)
    private String vilage;
}

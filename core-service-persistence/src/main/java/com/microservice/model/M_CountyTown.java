package com.microservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name="M_CountyTown")
public class M_CountyTown extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinceId", insertable = false, updatable = false)
    private M_Province province;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "provinceId", nullable = false)
    private Integer provinceId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "countyTown", length = 50, nullable = false)
    private String countyTown;

}

package com.microservice.model;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@Entity
@Table(name = "M_District")
public class M_District extends BaseMaster {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cityOrRegencyId", insertable = false, updatable = false)
    private M_CityOrRegency cityOrRegency;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "cityOrRegencyId", nullable = false)
    private Integer cityOrRegencyId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "district", length = 50, nullable = false)
    private String district;
}

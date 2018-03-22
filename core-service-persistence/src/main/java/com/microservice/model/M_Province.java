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
@Table(name="M_Province")
public class M_Province extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "countryId", insertable = false, updatable = false)
    private M_Country country;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "countryId", nullable = false)
    private Integer countryId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "province", length = 50, nullable = false)
    private String province;

}

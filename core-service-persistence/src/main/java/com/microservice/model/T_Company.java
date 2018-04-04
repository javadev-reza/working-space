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
@Table(name="T_Company")
public class T_Company extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "company", length = 50, nullable = false)
    private String company;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "businessScaleId", insertable = false, updatable = false)
    private M_BusinessScale businessScale;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "businessScaleId", nullable = false)
    private Integer businessScaleId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branchCompanyCode", insertable = false, updatable = false)
    private T_Company branchCompany;

    @Column(name = "branchCompanyCode", nullable = true)
    private String branchCompanyCode;

}

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
@Table(name="M_Application")
public class M_Application extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modulId", insertable = false, updatable = false)
    private M_Modul modul;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "modulId", nullable = false)
    private Integer modulId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "application", length = 50, nullable = false)
    private String application;

}

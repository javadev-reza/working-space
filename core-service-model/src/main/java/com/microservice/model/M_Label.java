package com.microservice.model;

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
@Table(name = "M_Label")
public class M_Label extends BaseMaster {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "languageId", insertable = false, updatable = false)
    private M_Language language;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "languageId", nullable = false)
    private Integer languageId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "label", length = 100, nullable = false)
    private String label;
}

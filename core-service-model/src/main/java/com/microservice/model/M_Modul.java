package com.microservice.model;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
@Entity
@Table(name = "M_Modul")
public class M_Modul extends BaseMaster {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "modul", length = 50, nullable = false)
    private String modul;

    @Column(name = "price", nullable = true)
    private Double price;
}

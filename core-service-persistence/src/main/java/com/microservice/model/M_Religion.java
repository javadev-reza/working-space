package com.microservice.model;

import com.microservice.model.BaseMaster;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@Entity
@Table(name="M_Religion")
public class M_Religion extends BaseMaster {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "religion", length = 20, nullable = false)
    private String religion;
}

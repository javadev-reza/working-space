package com.microservice.model;

import com.microservice.model.BaseMaster;
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
@Table(name="M_Gender")
public class M_Gender extends BaseMaster {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "gender", length = 10, nullable = false)
    private String gender;
}

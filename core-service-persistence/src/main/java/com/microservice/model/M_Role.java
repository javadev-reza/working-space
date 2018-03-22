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
@Table(name="M_Role")
public class M_Role extends BaseMaster {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "role", length = 50, nullable = false)
    private String role;

}



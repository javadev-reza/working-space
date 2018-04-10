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
@Table(name="T_User")
public class T_User extends BaseTransaction {

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "userName", length = 50, nullable = false)
    private String userName;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "password", length = 50, nullable = false)
    private String password;

}

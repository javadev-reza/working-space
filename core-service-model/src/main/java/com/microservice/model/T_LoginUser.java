package com.microservice.model;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
@Table(name = "T_LoginUser")
public class T_LoginUser extends BaseTransaction {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleUserId", insertable = false, updatable = false)
    private M_RoleUser roleUser;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "roleUserId", nullable = false)
    private Integer roleUserId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "userName", length = 50, nullable = false)
    private String userName;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "password", length = 50, nullable = false)
    private String password;

}

package com.microservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author reza
 */
@Getter
@Setter
@Entity
@Table(name="M_ApiRegister")
public class M_ApiRegister extends BaseMaster {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "applicationId", insertable = false, updatable = false)
    private M_Application application;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "applicationId", nullable = false)
    private Integer applicationId;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "api", length = 50, nullable = false)
    private String api;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "link", length = 50, nullable = false)
    private String link;

    @NotNull(message = COLUMN_NOT_NULL)
    @Column(name = "method", length = 10, nullable = false)
    private String method;
}

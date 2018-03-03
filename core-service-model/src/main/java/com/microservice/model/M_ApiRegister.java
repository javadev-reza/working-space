package com.microservice.model;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "M_ApiRegister")
public class M_ApiRegister extends BaseMaster {

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

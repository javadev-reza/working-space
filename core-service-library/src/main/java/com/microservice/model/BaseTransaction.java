package com.microservice.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
/**
 *
 * @author Reza
 */
@Getter
@Setter
@MappedSuperclass
public class BaseTransaction implements Serializable {
    
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(columnDefinition = "CHAR(32)", unique = true)
    private String code;
    
    @Column(name = "statusEnabled", nullable=true)
    private Boolean statusEnabled;
}

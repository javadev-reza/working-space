package com.microservice.model.dto;

import javax.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Reza
 */
@Getter
@Setter
@MappedSuperclass
public class BaseTransactionDto {
    
    private String code;
    
    private Boolean statusEnabled;
}

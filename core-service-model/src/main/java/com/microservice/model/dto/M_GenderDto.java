package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class M_GenderDto extends BaseMasterDto {

    @Column(name = "languageId", nullable = false)
    private Integer languageId;
    
    @NotNull(message = COLUMN_NOT_NULL)
    private String gender;
}

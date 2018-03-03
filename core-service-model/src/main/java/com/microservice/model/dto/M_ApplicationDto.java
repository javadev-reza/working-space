package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.validation.constraints.NotNull;

import com.microservice.model.M_ApiRegister;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 *
 * @author Reza
 */
@Getter
@Setter
public class M_ApplicationDto extends BaseMasterDto{
    
    @NotNull(message=COLUMN_NOT_NULL)
    private Integer modulId;
    
    @NotNull(message=COLUMN_NOT_NULL)
    private String application;

    private List<M_ApiRegisterDto> apiRegister;
}

package com.microservice.dto;

import com.microservice.model.BaseMasterDto;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.List;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class M_ModulDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String modul;

    private Double price;

    private List<M_ApplicationDto> application;
}

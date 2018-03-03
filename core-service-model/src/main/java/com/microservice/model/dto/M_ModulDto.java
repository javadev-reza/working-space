package com.microservice.model.dto;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

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

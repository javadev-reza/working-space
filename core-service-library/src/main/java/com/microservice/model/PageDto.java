package com.microservice.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

/**
 *
 * @author reza
 */
@Setter
@Getter
@ApiModel
public class PageDto {

    @NotNull(message = "not null")
    @ApiModelProperty(value = "page, default : 1", required = true, example = "1")
    private Integer page = 1;

    @NotNull(message = "not null")
    @ApiModelProperty(value = "row limit, default : 10", required = true)
    private Integer limit = 10;

    @ApiModelProperty(value = "order, default : asc", required = false)
    private String dir = "asc";

    @ApiModelProperty(value = "sort by", required = false)
    private String sort = "";

    @ApiModelProperty(value = "group by", required = false)
    private String groupBy = "";

    @ApiModelProperty(value = "find by", required = false)
    private String findBy = "";

}

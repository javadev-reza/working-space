package com.microservice.model.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.validation.constraints.NotNull;

/**
 *
 * @author reza
 */
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

    @ApiModelProperty(value = "find by", required = false)
    private String findBy = "";

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getFindBy() {
        return findBy;
    }

    public void setFindBy(String findBy) {
        this.findBy = findBy;
    }

}

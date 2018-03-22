package com.microservice.implement;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;

/**
 *
 * @author reza
 */
public class SwaggerInfo{
    
    public ApiInfo apiInfoAuth() {
        return new ApiInfoBuilder()
        .title("Micro Service - Authentication")
        .description("------------------------------------------------------")
        .contact(": Reza : reza@mediawave.biz")
        .version("Nanny's Micro Service Version 1.0")
        .build();
    }
    
    public ApiInfo apiInfoMaster() {
        return new ApiInfoBuilder()
        .title("Micro Service - Master's")
        .description("------------------------------------------------------")
        .contact(": Reza : reza@mediawave.biz")
        .version("Nanny's Micro Service Version 1.0")
        .build();
    }
}

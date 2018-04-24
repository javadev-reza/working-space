package com.microservice;

import com.microservice.implement.SwaggerInfo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

import static com.microservice.constanta.WebConstant.DeclareVariable.CONTROLLER_PATCH;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.FROM;

/**
 *
 * @author Reza
 */
@EnableSwagger2
@EnableEurekaClient
@EnableDiscoveryClient
@SpringBootApplication
public class MessagingMicroservice {

    public static void main(String[] args) {
        SpringApplication.run(MessagingMicroservice.class, args);
    }

    @Bean
    public Docket api(){
        List<Parameter> aParameters = new ArrayList<>();

        aParameters.add(new ParameterBuilder()
                .name(AUTHORIZATION)
                .description(AUTHORIZATION)
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(true)
                .build());

        aParameters.add(new ParameterBuilder()
                .name(FROM)
                .description(FROM)
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(true)
                .build());

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new SwaggerInfo().apiInfoAuth())
                .pathMapping("")
                .globalOperationParameters(aParameters)
                .select()
                .apis(RequestHandlerSelectors.basePackage(CONTROLLER_PATCH))
                .paths(PathSelectors.any())
                .build();
    }
}

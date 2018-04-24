package com.microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

/**
 *
 * @author Reza
 */
@EnableConfigServer
@SpringBootApplication
public class ConfigApp  {
    
    public static void main(String[] args) {
        SpringApplication.run(ConfigApp.class, args);
    }

}

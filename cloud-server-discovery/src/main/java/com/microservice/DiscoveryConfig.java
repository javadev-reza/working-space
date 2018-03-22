package com.microservice;

import java.net.InetSocketAddress;

import com.github.vanroy.cloud.dashboard.config.EnableCloudDashboard;
import org.apache.catalina.core.AprLifecycleListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;

/**
 *
 * @author Reza
 */
@SpringBootApplication
@EnableEurekaServer
@EnableDiscoveryClient
@EnableCloudDashboard
public class DiscoveryConfig {
    
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryConfig.class, args);
    }
    
    @Value("${com.tomcat.apr:false}")
	private boolean enableApr;
	
    @Bean
    public TomcatEmbeddedServletContainerFactory tomcatEmbeddedServletContainerFactory() {
	TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory();
	    if (enableApr) {
            tomcat.setProtocol("org.apache.coyote.http11.Http11AprProtocol");
            tomcat.addContextLifecycleListeners(new AprLifecycleListener());
            tomcat.setAddress(new InetSocketAddress(0).getAddress());
	    }
	    return tomcat;
    }
   
}

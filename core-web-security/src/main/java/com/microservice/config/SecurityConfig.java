package com.microservice.config;

import com.google.common.collect.ImmutableList;
import com.microservice.security.AuthenticateFilter;
import com.microservice.security.AuthenticateAdapter;
import com.microservice.security.UnauthorizedEntryPoint;
import com.microservice.security.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import static org.springframework.http.HttpHeaders.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 *
 * @author reza
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UnauthorizedEntryPoint unauthorizedEntryPoint;
    private final UserDetailServiceImpl userDetailServiceImpl;
    private final AuthenticateAdapter authenticateAdapter;

    public SecurityConfig(){
        super(true);
        this.userDetailServiceImpl = new UserDetailServiceImpl();
	    this.authenticateAdapter = new AuthenticateAdapter(userDetailServiceImpl);
    }

    String[] SpringCloudUrl = {
        "/env",
        "/logging", 
        "/info", 
        "/health", 
        "/error", 
        "/metrics", 
        "/jmx", 
        "/threads", 
        "/trace",
        "/circuitBreaker.stream",
        "/circuitBreaker**/**",
        "/hystrix.stream", 
        "/hystrix**/**"
    };
	
    String[] SwaggerUrl = {
        "/api-docs.json",
        "/v2/api-docs/**",
        "/swagger-ui.html", 
        "/swagger-resources/**",
        "/api/**"
    };

    String[] WebUrl = {
        "/favicon.ico",
        "/webjars/**",
        "**/*.html",
        "**/*.css",
        "**/*.js",
        "/file/**",
        "/image/**",
        "**/*.pdf",
        "/details/**"
    };

    String[] MicroServiceUrl = {
        "/sign-in",
        "/company-registration/save"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors()
            .and()
            .csrf().disable()
            .anonymous()
            .and()
            .servletApi()
            .and()
            .authorizeRequests()
            .antMatchers(SpringCloudUrl).permitAll()
            .antMatchers(SwaggerUrl).permitAll()
            .antMatchers(WebUrl).permitAll()
            .antMatchers(MicroServiceUrl).permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .addFilterBefore(new AuthenticateFilter(authenticateAdapter), UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling()
            .authenticationEntryPoint(unauthorizedEntryPoint);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOrigins(ImmutableList.of("*"));
        config.setAllowedHeaders(ImmutableList.of(AUTHORIZATION, FROM, "content-type"));
        config.setAllowedMethods(ImmutableList.of("OPTIONS","POST","GET","PUT","DELETE","PATCH"));
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService()).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    @Override
    public UserDetailServiceImpl userDetailsService() {
        return userDetailServiceImpl;
    }

    @Bean
    public AuthenticateAdapter authenticateService() {
        return authenticateAdapter;
    }
}

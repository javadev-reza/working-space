package com.microservice.annotation;

import com.microservice.enums.Roleuser;
import com.microservice.enums.Restclient;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 *
 * @author reza
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER, ElementType.ANNOTATION_TYPE,  ElementType.TYPE})
public @interface Permission {
    Restclient[] restclient() default {};
    Roleuser[] roleuser() default {};
}

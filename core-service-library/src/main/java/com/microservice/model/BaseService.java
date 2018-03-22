package com.microservice.model;

import java.util.Map;

/**
 *
 * @author Reza
 * @param <T>
 * @param <Object>
 */
public interface BaseService<T, Object>{
    Map save(T dto);
    Map update(T dto);
    Map delete(Object primary);
    Map getOne(Object primary);
    Map getAll(PageDto pageDto);
}

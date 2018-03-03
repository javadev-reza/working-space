package com.microservice.restclient;

/**
 *
 * @author reza
 */
public class BaseRetrofit {
    
    public <T extends Object> T getConnection(String URL, Class<T> clazz) {
        return new RetrofitClientAdapter().getClient(URL).create((Class<T>) clazz);
    }
}

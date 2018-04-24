package com.microservice.restclient;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import okhttp3.Cache;
import okhttp3.CacheControl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import static org.springframework.http.HttpHeaders.CACHE_CONTROL;

/**
 *
 * @author reza
 */
public class RetrofitClientInterceptor {

    public OkHttpClient authInterceptor(String authorization) {
        //----------------------------------------------------------------------
        OkHttpClient defaultHttpClient
                = new OkHttpClient.Builder().addInterceptor((Interceptor.Chain chain) -> {
                    if (authorization.isEmpty()) {
                        return chain.proceed(chain.request());
                    }
                    //------------------------------------------------------------------
                    Request authorisedRequest = chain
                            .request()
                            .newBuilder()
                            .header("Authorization", authorization)
                            .build();
                    return chain.proceed(authorisedRequest);
                }).build();
        //----------------------------------------------------------------------
        return defaultHttpClient;
    }

    public OkHttpClient cacheInterceptor(String baseUrl) throws IOException {
        //----------------------------------------------------------------------
        OkHttpClient defaultHttpClient = new OkHttpClient.Builder()
                .addInterceptor(profideOfflineCacheInterceptor())
                .addNetworkInterceptor(profideCacheInterceptor())
                .cache(provideCache(baseUrl))
                .build();
        //----------------------------------------------------------------------
        return defaultHttpClient;
    }

    public static Interceptor profideOfflineCacheInterceptor() {
        return new Interceptor() {
            @Override
            public Response intercept(Chain chain) throws IOException {
                Request resuest = chain.request();

                CacheControl cacheControl = new CacheControl.Builder()
                        .maxStale(1, TimeUnit.DAYS)
                        .build();

                resuest = resuest
                        .newBuilder()
                        .cacheControl(cacheControl)
                        .build();
                return chain.proceed(resuest);
            }
        };
    }

    public static Interceptor profideCacheInterceptor() {

        return (chain) -> {
            Response response = chain.proceed(chain.request());

            CacheControl cacheControl = new CacheControl.Builder()
                    .maxAge(2, TimeUnit.MINUTES)
                    .build();

            return response.newBuilder()
                    .header(CACHE_CONTROL, cacheControl.toString())
                    .build();
        };
    }

    public static Cache provideCache(String baseUrl) {
        Cache cache = null;
        String fileName = baseUrl.replace("/", "");
        try {
            cache = new Cache(new File("/home/reza/cache/" + fileName + ".txt"), 10 * 1024 * 1024);
        } catch (Exception e) {

        }
        return cache;
    }

    public OkHttpClient globalErrorInterceptor(String authorization) {
        //----------------------------------------------------------------------
        OkHttpClient defaultHttpClient
                = new OkHttpClient.Builder().addInterceptor((Interceptor.Chain chain) -> {
                    Request request = chain.request();
                    okhttp3.Response response = chain.proceed(request);

                    if (response.code() == 500) {

                    }
                    if (response.code() == 500) {

                    }
                    return response;
                }).build();
        //----------------------------------------------------------------------
        return defaultHttpClient;
    }
}

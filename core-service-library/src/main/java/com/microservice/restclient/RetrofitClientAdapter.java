package com.microservice.restclient;

import com.microservice.util.CommonUtil;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 *
 * @author reza
 */
public class RetrofitClientAdapter extends RetrofitClientInterceptor {

    private String baseUrl;

    private Retrofit retrofit;

    public Retrofit getClient(String baseUrl) {
        this.baseUrl = baseUrl;
        new Syncronous().run();
        return retrofit;
    }

    class Syncronous extends Thread {

        @Override
        public void run() {
            if (CommonUtil.isNotNullOrEmpty(baseUrl)) {
                Retrofit retro = new Retrofit.Builder()
                        .baseUrl(baseUrl)
                        .client(authInterceptor(""))
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();
                retrofit = retro;
                baseUrl = null;
            }
        }
    }
}

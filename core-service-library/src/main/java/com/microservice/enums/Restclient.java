package com.microservice.enums;

public enum Restclient {
    WEB_APPLICATION("web-application"),
    MOBILE("mobile");

    private final String restclient;

    Restclient(String restclient){
        this.restclient=restclient;
    }

    public String getRestclient() {
        return restclient;
    }
}

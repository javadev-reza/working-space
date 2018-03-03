/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.microservice.enums;

/**
 *
 * @author reza
 */
public enum Roleuser {
    SUPERUSER(1),
    OWNER(2),
    CUSTOMER(3),
    EMPLOYEE(4);

    private final int id;

    Roleuser(int id) {
        this.id = id;
    }

    public int getValue() {
        return id;
    }
}

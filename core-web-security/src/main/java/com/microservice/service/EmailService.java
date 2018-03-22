package com.microservice.service;

/**
 *
 * @author reza
 */
public interface EmailService {
    void sendEmail(String activationCode, String email);
}

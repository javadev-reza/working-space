package com.microservice.security.service;

/**
 *
 * @author reza
 */
public interface EmailService {
    void sendEmail(String activationCode, String email);
}

package com.microservice.service;

/**
 *
 * @author reza
 */
public interface EmailService {
    void sendEmail(String subject, String message, String to);
}

package com.microservice.implement;

import com.microservice.service.EmailService;

import com.microservice.util.CommonUtil;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Properties;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 *
 * @author reza
 */
@Service
public class EmailServiceImpl implements EmailService {

    private final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(EmailServiceImpl.class);

    private String SUBJECT;
    private String MESSAGE;
    private String TO;

    @Transactional(readOnly = false)
    public void sendEmail(String SUBJECT, String MESSAGE, String TO) {
        this.SUBJECT =SUBJECT;
        this.MESSAGE =MESSAGE;
        this.TO =TO;
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(SUBJECT) &&
                CommonUtil.isNotNullOrEmpty(MESSAGE) && CommonUtil.isNotNullOrEmpty(TO)){
            Emailing email = new Emailing();
            email.start();
        }
    }

    private class Emailing extends Thread {
        //--------------------------------------------------------------------------------------------------------------
        String HOST     = "smtp.gmail.com";
        String USERNAME = "jcashplay@gmail.com";
        String PASSWORD = "elisareza";
        Integer PORT    = 587;
        //--------------------------------------------------------------------------------------------------------------
        Properties getMailProperties() {
            Properties properties = new Properties();
            properties.put("mail.smtp.host", HOST);
            properties.put("mail.smtp.user", USERNAME);
            properties.put("mail.smtp.password", PASSWORD);
            properties.put("mail.smtp.port", PORT);
            properties.put("mail.smtp.auth", "true");
            properties.put("mail.smtp.starttls.enable", "true");
            properties.put("mail.smtp.starttls.required", "true");
            properties.put("mail.smtp.timeout",3600000);
            return properties;
        }
        //--------------------------------------------------------------------------------------------------------------
        JavaMailSenderImpl JavaMailSenderImpl() {
            JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
            javaMailSender.setHost(HOST);
            javaMailSender.setUsername(USERNAME);
            javaMailSender.setPassword(PASSWORD);
            javaMailSender.setPort(PORT);
            javaMailSender.setJavaMailProperties(getMailProperties());
            return javaMailSender;
        }
        //--------------------------------------------------------------------------------------------------------------
        @Override
        public void run() {
            try {
                JavaMailSender sender = JavaMailSenderImpl();
                //------------------------------------------------------------------------------------------------------
                if(CommonUtil.isNotNullOrEmpty(TO)){
                    MimeMessage mimeMessage = sender.createMimeMessage();
                    //--------------------------------------------------------------------------------------------------
                    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
                    helper.setFrom(USERNAME);
                    helper.setSubject(SUBJECT);
                    helper.setText(MESSAGE, false);
                    helper.addTo(TO);
                    //--------------------------------------------------------------------------------------------------
                    sender.send(mimeMessage);
                    LOGGER.info("pesan telah terkirim");
                } else{
                    LOGGER.info("tidak tersedia alamat email tujuan");
                }
            } catch (MessagingException ex) {
                LOGGER.error(ex.getMessage());
            }
        }
    }
}

package com.microservice.constanta;

/**
 *
 * @author Reza
 */
public class WebConstant {
    
    public static final class Header {
        public static final String CONTENT_TYPE = "Content-Type";
    }
    
    public static final class MessageInfo {
        public static final String INFO_MESSAGE = "INFO_MESSAGE";
        public static final String WARNING_MESSAGE = "WARNING_MESSAGE";
        public static final String ERROR_MESSAGE = "ERROR_MESSAGE";
        public static final String SUCCESS_MESSAGE = "SUCCESS_MESSAGE";
        public static final String EXCEPTION_MESSAGE = "EXCEPTION_MESSAGE";
        public static final String USERNAME_ERROR_MESSAGE = "USERNAME_ERROR_MESSAGE";
        public static final String PASSWORD_ERROR_MESSAGE = "PASSWORD_ERROR_MESSAGE";
        public static final String ACCOUNT_ERROR_MESSAGE = "ACCOUNT_ERROR_MESSAGE";
    }
    
    public static final class ValueMessageInfo {
        public static final String EMPTY_USER_PASSWORD = "Username or password is empty";
        public static final String INVALID_USER_PASSWORD = "Invalid username or password";
        public static final String USERNAME_IS_INCORECT = "This user name is incorrect";
        public static final String PASSWORD_IS_INCORECT = "This password is incorrect";
        public static final String ACCESS_DENIED = "You have not account";
        public static final String USERNAME_NOT_AVAILABLE = "User name not available";
        public static final String COLUMN_NOT_NULL = "This field is not null";
    }
    
    public static final class SecretCode {
        public static final String TOKEN_KEY = "f8Uua6KQcfRvdlqkkMKs6I+nK7Y=$FzfIaIar3fo=";
        public static final String ROOT = "ROOT";
        public static final String ROOT_PASSWORD = "HELLO WORLD";
    }
    
    public static final class DeclareVariable{
        public static final String CONTROLLER_PATCH = "com.microservice.controller";
    }
    
    public static final class JavaxMail{
        public static final String HOST = "smtp.gmail.com";
        public static final String EMAIL_SENDER = "jcashplay@gmail.com";
        public static final String PASSWORD = "elisareza";
        public static final String LEVEL_1   = "BfSFnfaqj//vwtwz99hhQg01nBM=$61xJk5FPEME=";
        public static final String LEVEL_2   = "ZJQOmzYizyP1GVbFgeI9SHW+SnKcFIP98wykXL8Q72Q=";
        public static final String SIGNATURE = "NHwOHmZscmKc+VMKjIpNjJlBrpQ=$qQyrE73k2gg=";
        public static final String SECRET    = "wTMoESNFTcTcnDpnBhoBnho9H48=$NoXuyO4Stvk=";
        public static final long EXPIRATIONTIME = 432_000_000;
    }
}
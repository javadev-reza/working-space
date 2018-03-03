package com.microservice.util;

import com.microservice.util.RestExceptionUtil.InternalServerErrorException;
import java.io.IOException;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 *
 * @author Reza
 */
public class PasswordUtil implements Serializable {

    private static final long serialVersionUID = 5821601416373245537L;
    private static final int ITERATION_NUMBER = 100;
    private static final int BYTES_ON_SIXTY_FOUR_BITS = 8;
    private final Base64 base64;
    private static final Log LOG = LogFactory.getLog(PasswordUtil.class);

    public PasswordUtil() {
        base64 = new Base64();
    }

    public String encryptPassword(String password) {
        String result = null;
        try {
            SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
            byte[] bSalt = new byte[BYTES_ON_SIXTY_FOUR_BITS];
            random.nextBytes(bSalt);
            byte[] bDigest = getHash(ITERATION_NUMBER, password, bSalt);
            String sDigest = byteToBase64(bDigest);
            String sSalt = byteToBase64(bSalt);
            result = sDigest + "$" + sSalt;
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException ex) {
            throw new InternalServerErrorException(ex.getMessage());
        }
        return result;
    }

    public boolean isPasswordEqual(String password, String hash) {
        boolean result = false;
        try {
            if (password == null || hash == null) {
                throw new IllegalArgumentException("Please fill the parameter");
            }
            String[] currentHashSalt = hash.split("\\$");
            if (currentHashSalt.length <= 1) {
                return false;
            }
            if (currentHashSalt[0].isEmpty() || currentHashSalt[1].isEmpty()) {
                return false;
            }
            byte[] bDigest = this.base64ToByte(currentHashSalt[0]);
            byte[] bSalt   = this.base64ToByte(currentHashSalt[1]);
            byte[] proposedDigest = getHash(ITERATION_NUMBER, password, bSalt);
            result = Arrays.equals(proposedDigest, bDigest);
        } catch (UnsupportedEncodingException | IllegalArgumentException ex) {
            throw new InternalServerErrorException(ex.getMessage());
        } catch (NoSuchAlgorithmException ex) {
            return false;
        }
        return result;
    }

    private byte[] getHash(int iterationNb, String password, byte[] salt) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest digest = MessageDigest.getInstance("SHA-1");
        digest.reset();
        digest.update(salt);
        byte[] input = digest.digest(password.getBytes("UTF-8"));
        for (int i = 0; i < iterationNb; i++) {
            digest.reset();
            input = digest.digest(input);
        }
        return input;
    }

    private byte[] base64ToByte(String data) {
        return base64.decode(data);
    }

    private String byteToBase64(byte[] data) {
        return base64.encodeToString(data).trim();
    }

}

package com.microservice.security;

import com.microservice.util.RestExceptionUtil.*;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 *
 * @author reza
 */
@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(BadGatewayException.class)
    protected void handleBadGateway(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_BAD_GATEWAY, ex.getMessage());
    }

    @ExceptionHandler(BadRequestException.class)
    protected void handleBadRequest(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, ex.getMessage());
    }

    @ExceptionHandler(ConflictException.class)
    protected void handleConflict(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_CONFLICT, ex.getMessage());
    }

    @ExceptionHandler(ExpectationFailedException.class)
    protected void handleExpectationFailed(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_EXPECTATION_FAILED, ex.getMessage());
    }

    @ExceptionHandler(ForbiddenException.class)
    protected void handleForbidden(RuntimeException ex, HttpServletResponse response) throws IOException {
        response.sendError(HttpServletResponse.SC_FORBIDDEN, ex.getMessage());
    }

    @ExceptionHandler(GatewayTimeOutException.class)
    protected void handleGatewayTimeOut(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_GATEWAY_TIMEOUT, ex.getMessage());
    }

    @ExceptionHandler(GoneException.class)
    protected void handleGone(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_GONE, ex.getMessage());
    }

    @ExceptionHandler(HttpVersionNotSupportedException.class)
    protected void handleHttpVersionNotSupported(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_HTTP_VERSION_NOT_SUPPORTED, ex.getMessage());
    }

    @ExceptionHandler(InternalServerErrorException.class)
    protected void handleInternalServerError(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, ex.getMessage());
    }

    @ExceptionHandler(LengthRequiredException.class)
    protected void handleLengthRequired(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_LENGTH_REQUIRED, ex.getMessage());
    }

    @ExceptionHandler(MethodNotAllowedException.class)
    protected void handleMethodNotAllowed(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, ex.getMessage());
    }

    @ExceptionHandler(NotAcceptableException.class)
    protected void handleNotAcceptable(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE, ex.getMessage());
    }

    @ExceptionHandler(NotFoundException.class)
    protected void handleNotFound(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_NOT_FOUND, ex.getMessage());
    }

    @ExceptionHandler(NotImplementedException.class)
    protected void handleNotImplemented(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_NOT_IMPLEMENTED, ex.getMessage());
    }

    @ExceptionHandler(NotModifiedException.class)
    protected void handleNotModified(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_NOT_MODIFIED, ex.getMessage());
    }

    @ExceptionHandler(NoContentException.class)
    protected void handleNoContent(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_NO_CONTENT, ex.getMessage());
    }

    @ExceptionHandler(PaymentRequiredException.class)
    protected void handlePaymentRequired(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_PAYMENT_REQUIRED, ex.getMessage());
    }

    @ExceptionHandler(PreconditionFailedException.class)
    protected void handlePreconditionFailed(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_PRECONDITION_FAILED, ex.getMessage());
    }

    @ExceptionHandler(ProxyAuthenticationRequiredException.class)
    protected void handleProxyAuthenticationRequired(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_PROXY_AUTHENTICATION_REQUIRED, ex.getMessage());
    }

    @ExceptionHandler(RequestRangeNotSatisfiableException.class)
    protected void handleRequestRangeNotSatisfiable(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_REQUESTED_RANGE_NOT_SATISFIABLE, ex.getMessage());
    }

    @ExceptionHandler(RequestEntityTooLargeException.class)
    protected void handleRequestEntityTooLarge(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_REQUEST_ENTITY_TOO_LARGE, ex.getMessage());
    }

    @ExceptionHandler(RequestTimeOutException.class)
    protected void handleRequestTimeOut(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_REQUEST_TIMEOUT, ex.getMessage());
    }

    @ExceptionHandler(RequestUriTooLongException.class)
    protected void handleRequestUriTooLong(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_REQUEST_URI_TOO_LONG, ex.getMessage());
    }

    @ExceptionHandler(UnauthorizedException.class)
    protected void handleUnauthorized(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
    }

    @ExceptionHandler(UnsuportedMediaTypeException.class)
    protected void handleUnsuportedMediaType(RuntimeException ex, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_UNSUPPORTED_MEDIA_TYPE, ex.getMessage());
    }
}

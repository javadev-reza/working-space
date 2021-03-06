package com.microservice.security;

import com.microservice.annotation.Permission;
import com.microservice.enums.Restclient;
import com.microservice.enums.Roleuser;
import com.microservice.model.M_Application;
import com.microservice.model.T_MapMenuToUser;
import com.microservice.model.dto.M_ApiRegisterDto;
import com.microservice.model.dto.M_ApplicationDto;
import com.microservice.model.dto.M_ModulDto;
import com.microservice.repository.MapMenuToUserRepository;
import com.microservice.security.service.impl.BaseServiceImpl;
import com.microservice.util.CommonUtil;
import com.microservice.util.RestExceptionUtil.ForbiddenException;
import java.lang.reflect.Method;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import static com.microservice.enums.Roleuser.SUPERUSER;
import static org.springframework.http.HttpHeaders.FROM;

/**
 *
 * @author reza
 */
@Component
public class PermissionInterceptor extends BaseServiceImpl implements HandlerInterceptor {

    @Autowired
    private MapMenuToUserRepository mapMenuToUserRepository;

    private final Logger LOG = LoggerFactory.getLogger(PermissionInterceptor.class);

    //--------------------------------------------------------------------------
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Boolean result = false;
        //----------------------------------------------------------------------
        String URI  = request.getRequestURI();
        String From = request.getHeader(FROM);
        //----------------------------------------------------------------------

        boolean byPass
                = URI.contains("swagger-resources")
                || URI.contains("swagger-ui.html")
                || URI.contains("error");
        //----------------------------------------------------------------------
        if (byPass) {
            if (!URI.contains("error")) {
                LOG.warn("By Pass : " + URI);
            } else{
                result = false;
            }

            //------------------------------------------------------------------
            result = true;
        } else {
            //------------------------------------------------------------------
            if (handler instanceof org.springframework.web.method.HandlerMethod) {
                HandlerMethod handlerMethod = (HandlerMethod) handler;
                //--------------------------------------------------------------
                Method method = handlerMethod.getMethod();
                //--------------------------------------------------------------
                if (method.getDeclaringClass().isAnnotationPresent(RestController.class)) {
                    //----------------------------------------------------------
                    Permission annotation = method.getAnnotation(Permission.class);
                    //----------------------------------------------------------
                    if (CommonUtil.isNullOrEmpty(annotation)) {
                        LOG.warn("Access denied : " + URI);
                        throw new ForbiddenException("Access denied");
                    } else {
                        //------------------------------------------------------
                        result = permissionExecute(annotation, URI, From);
                        if (!result) {
                            throw new ForbiddenException("User does not have access privileges");
                        }
                    }
                } else {
                    LOG.warn("Access Denied : " + URI);
                    result = false;
                    throw new ForbiddenException("Access denied");
                }
            }
        }
        return result;
    }
    //--------------------------------------------------------------------------

    private Boolean permissionExecute(Permission annotation, String URI, String From) {
        Boolean restclientValidation = false;
        Boolean roleuserValidation   = false;
        //--------------------------------------------------------------------------------------------------------------
        Restclient[] restclients = annotation.restclient();
        for(Restclient restclient : restclients){
            if(restclient.getRestclient().matches(From)){
                restclientValidation = true;
                break;
            }
        }
        //--------------------------------------------------------------------------------------------------------------

        Boolean check =
                URI.contains("/signin-web")
                || URI.contains("/signup-web")
                || URI.contains("/signout-web")
                || URI.contains("/signin-mobile")
                || URI.contains("/signup-mobile")
                || URI.contains("/signout-mobile");

        if(!check) {
            Roleuser[] roleusers = annotation.roleuser();
            for (Roleuser roleuser : roleusers) {
                if ((roleuser.getValue() == SUPERUSER.getValue()) && (getSession().getRoleUserId() == SUPERUSER.getValue())) {
                    roleuserValidation = true;
                } else {
                    for (M_ModulDto modulDto :
                            jsonToModulDto(mapMenuToUserRepository
                                    .findByLoginUserCode(getSession().getAuthCode()).getMenuList())) {
                        //--------------------------------------------------------------------------------------------------
                        for (M_ApplicationDto applicationDto : modulDto.getApplication()) {
                            //----------------------------------------------------------------------------------------------
                            for (M_ApiRegisterDto apiRegisterDto : applicationDto.getApiRegister()) {
                                //------------------------------------------------------------------------------------------
                                if (apiRegisterDto.getLink().contains(URI)) {
                                    roleuserValidation = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return restclientValidation && roleuserValidation;
        } else{
            return restclientValidation;
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    @Override
    public void postHandle(
            HttpServletRequest hsr,
            HttpServletResponse hsr1,
            Object o, ModelAndView mav)
            throws Exception {
    }
    @Override
    public void afterCompletion(
            HttpServletRequest request,
            HttpServletResponse hsr1,
            Object o, Exception excptn)
            throws Exception {
    }
}

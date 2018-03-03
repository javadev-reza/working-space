package com.microservice;

import com.microservice.annotation.InitMappingHandler;
import com.microservice.model.M_ApiRegister;
import com.microservice.model.M_Application;
import com.microservice.model.M_Modul;
import com.microservice.repository.ApiRegisterRepository;
import com.microservice.repository.ApplicationRepository;
import com.microservice.repository.ModulRepository;
import com.microservice.util.CommonUtil;
import java.lang.reflect.Method;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

/**
 *
 * @author reza
 */
@Component
public class InitMappingHandlerConfig extends RequestMappingHandlerMapping {

    @Autowired
    private ModulRepository modulRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private ApiRegisterRepository apiRegisterRepository;

    @Override
    protected void registerHandlerMethod(Object handler, Method method, RequestMappingInfo requestMappingInfo) {

        if (CommonUtil.isNotNullOrEmpty(handler)) {
            //------------------------------------------------------------------
            Set<String> path = requestMappingInfo.getPatternsCondition().getPatterns();
            //------------------------------------------------------------------
            Set<RequestMethod> meth = requestMappingInfo.getMethodsCondition().getMethods();
            //------------------------------------------------------------------
            Boolean check = path.contains("swagger-resources") || path.contains("error");
            if (!check) {
                InitMappingHandler restController = (InitMappingHandler) method.getDeclaringClass().getAnnotation(InitMappingHandler.class);

                if (CommonUtil.isNotNullOrEmpty(restController)) {
                    M_Modul modul = saveModuls(restController.value());

                    if (CommonUtil.isNotNullOrEmpty(modul.getId())) {
                        RequestMapping RequestMapping = (RequestMapping) method.getDeclaringClass().getAnnotation(RequestMapping.class);

                        if (CommonUtil.isNotNullOrEmpty(RequestMapping.name())) {
                            M_Application application = saveApplication(modul.getId(), RequestMapping.name());

                            if (CommonUtil.isNotNullOrEmpty(application) && CommonUtil.isNotNullOrEmpty(meth) && CommonUtil.isNotNullOrEmpty(path)) {
                                saveApiRegistration(application.getId(), path, meth, requestMappingInfo.getName());
                            }
                        }
                    }
                }
            }
        }
    }

    private M_Modul saveModuls(String modulName) {
        M_Modul check = modulRepository.findByModul(modulName);
        if (CommonUtil.isNullOrEmpty(check)) {
            M_Modul modul = new M_Modul();
            modul.setStatusEnabled(Boolean.TRUE);
            modul.setDescription("-");
            modul.setModul(modulName);
            check = modulRepository.save(modul);
        }
        return check;
    }

    private M_Application saveApplication(Integer modulId, String applicationName) {
        M_Application check = applicationRepository.findByApplication(applicationName);
        if (CommonUtil.isNullOrEmpty(check)) {
            M_Application Application = new M_Application();
            Application.setStatusEnabled(Boolean.TRUE);
            Application.setDescription("-");
            Application.setApplication(applicationName);
            Application.setModulId(modulId);
            check = applicationRepository.save(Application);
        }
        return check;
    }

    private void saveApiRegistration(Integer applicationId, Set<String> path, Set<RequestMethod> meth, String apiName) {
        String link = path.iterator().next();
        RequestMethod method = meth.iterator().next();

        M_ApiRegister check = apiRegisterRepository.findByLink(link);
        if (CommonUtil.isNullOrEmpty(check)) {
            M_ApiRegister apiRegister = new M_ApiRegister();
            apiRegister.setStatusEnabled(Boolean.TRUE);
            apiRegister.setDescription("-");
            apiRegister.setApi(apiName);
            apiRegister.setLink(link);
            apiRegister.setApplicationId(applicationId);
            switch (method) {
                case DELETE:
                    apiRegister.setMethod("DELETE");
                    break;
                case GET:
                    apiRegister.setMethod("GET");
                    break;
                case HEAD:
                    apiRegister.setMethod("HEAD");
                    break;
                case OPTIONS:
                    apiRegister.setMethod("OPTIONS");
                    break;
                case PATCH:
                    apiRegister.setMethod("PATCH");
                    break;
                case POST:
                    apiRegister.setMethod("POST");
                    break;
                case PUT:
                    apiRegister.setMethod("PUT");
                    break;
                case TRACE:
                    apiRegister.setMethod("TRACE");
                    break;
                default:
                    break;
            }
            apiRegisterRepository.save(apiRegister);
        }
    }
}

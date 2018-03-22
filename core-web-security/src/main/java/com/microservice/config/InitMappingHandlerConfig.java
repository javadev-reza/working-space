package com.microservice.config;

import com.microservice.annotation.Modul;
import com.microservice.model.M_ApiRegister;
import com.microservice.model.M_Application;
import com.microservice.model.M_Modul;
import com.microservice.repository.ApiRegisterRepo;
import com.microservice.repository.ApplicationRepo;
import com.microservice.repository.ModulRepo;
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
    private ModulRepo modulRepo;

    @Autowired
    private ApplicationRepo applicationRepo;

    @Autowired
    private ApiRegisterRepo apiRegisterRepo;

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
                Modul restController = (Modul) method.getDeclaringClass().getAnnotation(Modul.class);

                if (CommonUtil.isNotNullOrEmpty(restController)) {
                    M_Modul modul = saveModuls(restController.name());

                    if (CommonUtil.isNotNullOrEmpty(modul.getId())) {
                        RequestMapping RequestMapping = (RequestMapping) method.getDeclaringClass().getAnnotation(RequestMapping.class);

                        if (CommonUtil.isNotNullOrEmpty(RequestMapping.name())) {
                            M_Application application = saveApplication(modul.getId(), RequestMapping.name());

                            if (CommonUtil.isNotNullOrEmpty(application) && CommonUtil.isNotNullOrEmpty(meth) && CommonUtil.isNotNullOrEmpty(path)) {
                                String[] split = requestMappingInfo.getName().split("#");
                                saveApiRegistration(application.getId(), path, meth, split[1]);
                            }
                        }
                    }
                }
            }
        }
    }

    private M_Modul saveModuls(String modulName) {
        M_Modul check = modulRepo.findByStatusEnabledAndModul(true, modulName);
        if (CommonUtil.isNullOrEmpty(check)) {
            M_Modul modul = new M_Modul();
            modul.setStatusEnabled(Boolean.TRUE);
            modul.setDescription("-");
            modul.setModul(modulName);
            check = modulRepo.save(modul);
        }
        return check;
    }

    private M_Application saveApplication(Integer modulId, String applicationName) {
        M_Application check = applicationRepo.findByStatusEnabledAndApplication(true, applicationName);
        if (CommonUtil.isNullOrEmpty(check)) {
            M_Application Application = new M_Application();
            Application.setStatusEnabled(Boolean.TRUE);
            Application.setDescription("-");
            Application.setApplication(applicationName);
            Application.setModulId(modulId);
            check = applicationRepo.save(Application);
        }
        return check;
    }

    private void saveApiRegistration(Integer applicationId, Set<String> path, Set<RequestMethod> meth, String apiName) {
        String link = path.iterator().next();
        RequestMethod method = meth.iterator().next();

        M_ApiRegister check = apiRegisterRepo.findByStatusEnabledAndLink(true, link);
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
            apiRegisterRepo.save(apiRegister);
        }
    }
}

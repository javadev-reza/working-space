package com.microservice.implement;

import com.microservice.dto.*;
import com.microservice.model.*;
import com.microservice.service.*;
import com.microservice.util.CommonUtil;
import com.microservice.util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CompanyServiceImpl extends BaseServiceImpl implements CompanyService {

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Override
    @Transactional(readOnly = false)
    public Map save(CompanyRegistrationDto dto) {
        //--------------------------------------------------------------------------------------------------------------
        String password = getDefaultPassword();
        //--------------------------------------------------------------------------------------------------------------
        T_Company company = companyRepo.save(setModel(dto.getCompany(), new T_Company()));
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)){
            //----------------------------------------------------------------------------------------------------------
            dto.getCompanyProfile().setCompanyCode(company.getCode());
            //----------------------------------------------------------------------------------------------------------
            T_CompanyProfile companyProfile = companyProfileRepo.save(setModel(dto.getCompanyProfile(), new T_CompanyProfile()));
            //----------------------------------------------------------------------------------------------------------
            if (CommonUtil.isNotNullOrEmpty(companyProfile)) {
                //------------------------------------------------------------------------------------------------------
                Map<String, Object> role = saveRole(company);
                //------------------------------------------------------------------------------------------------------
                if (CommonUtil.isNotNullOrEmpty(role)) {
                    //--------------------------------------------------------------------------------------------------
                    saveUser(companyProfile, role, password);
                    //--------------------------------------------------------------------------------------------------
                    saveRoleMenu(role);
                    //--------------------------------------------------------------------------------------------------
                    emailing(
                            "User Default",
                            "Username : " + companyProfile.getEmailAddress() + "\n" + "Password : " + password,
                            companyProfile.getEmailAddress());
                }
            }
        }
        return setResult(company);
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(CompanyRegistrationDto dto) {
        T_Company company = companyRepo.save(setModel(dto.getCompany(), companyRepo.findByStatusEnabledAndCode(true, dto.getCompany().getCode())));
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)){
            //----------------------------------------------------------------------------------------------------------
            companyProfileRepo.save(setModel(dto.getCompanyProfile(), companyProfileRepo.findByStatusEnabledAndCode(true, dto.getCompanyProfile().getCode())));
        }
        return setResult(company);
    }

    @Override
    public Map delete(String primary) {
        T_Company company = setModel(companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        company.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        company = companyRepo.save(company);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)){
            companyProfileRepo.findByStatusEnabledAndCompanyCode(true, company.getCode());
        }
        return setResult(company);
    }

    @Override
    public Map getOne(String primary) {
        T_Company company = setModel(
                companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Company> companies =
                companyRepo.findByStatusEnabledAndCompanyIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companies);
    }

    @Transactional(readOnly = false)
    public Map<String, Object> saveRole(T_Company company){
        T_RoleDto roleDto = new T_RoleDto();
        //--------------------------------------------------------------------------------------------------------------
        roleDto.setStatusEnabled(true);
        //--------------------------------------------------------------------------------------------------------------
        roleDto.setCompanyCode(company.getCode());
        //--------------------------------------------------------------------------------------------------------------
        roleDto.setRole("Administrator");
        //--------------------------------------------------------------------------------------------------------------
        return roleService.save(roleDto);
    }

    @Transactional(readOnly = false)
    public Map<String, Object> saveUser(T_CompanyProfile companyProfile, Map<String, Object> role, String password){
        String roleCode = (String) getResult(role).get("code");
        //--------------------------------------------------------------------------------------------------------------
        T_UserDto userDto = new T_UserDto();
        //--------------------------------------------------------------------------------------------------------------
        userDto.setStatusEnabled(true);
        //--------------------------------------------------------------------------------------------------------------
        userDto.setRoleCode(roleCode);
        //--------------------------------------------------------------------------------------------------------------
        userDto.setUserName(companyProfile.getEmailAddress());
        //--------------------------------------------------------------------------------------------------------------
        userDto.setPassword(new PasswordUtil().encryptPassword(password));
        //--------------------------------------------------------------------------------------------------------------
        UserRegistrationDto userRegistrationDto = new UserRegistrationDto();
        //--------------------------------------------------------------------------------------------------------------
        userRegistrationDto.setUser(userDto);
        //--------------------------------------------------------------------------------------------------------------
        return userService.save(userRegistrationDto);
    }

    @Transactional(readOnly = false)
    public void saveRoleMenu(Map<String, Object> role){
        String roleCode = (String) getResult(role).get("code");
        //--------------------------------------------------------------------------------------------------------------
        List<Integer> listId = new ArrayList<>();
        //--------------------------------------------------------------------------------------------------------------
        listId.add(1);
        //--------------------------------------------------------------------------------------------------------------
        List<M_ModulDto> m_modulDtos = new ArrayList<>();
        //--------------------------------------------------------------------------------------------------------------
        for (M_Modul m_modul : modulRepo.findByStatusEnabledAndIdIsIn(true, listId)) {
            //----------------------------------------------------------------------------------------------------------
            M_ModulDto m_modulDto = setModel(m_modul, new M_ModulDto());
            //----------------------------------------------------------------------------------------------------------
            List<M_ApplicationDto> m_applicationDtos = new ArrayList<>();
            //----------------------------------------------------------------------------------------------------------
            for(M_Application m_application : applicationRepo.findAllByStatusEnabledAndModulId(true, m_modul.getId())){
                //------------------------------------------------------------------------------------------------------
                M_ApplicationDto m_applicationDto = setModel(m_application, new M_ApplicationDto());
                //------------------------------------------------------------------------------------------------------
                List<M_ApiRegisterDto> m_apiRegisterDtos = new ArrayList<>();
                //------------------------------------------------------------------------------------------------------
                for(M_ApiRegister m_apiRegister : apiRegisterRepo.findAllByStatusEnabledAndApplicationId(true, m_application.getId())){
                    //--------------------------------------------------------------------------------------------------
                    M_ApiRegisterDto m_apiRegisterDto = setModel(m_apiRegister, new M_ApiRegisterDto());
                    //--------------------------------------------------------------------------------------------------
                    m_apiRegisterDtos.add(m_apiRegisterDto);
                }
                //------------------------------------------------------------------------------------------------------
                m_applicationDto.setApiRegister(m_apiRegisterDtos);
                //------------------------------------------------------------------------------------------------------
                m_applicationDtos.add(m_applicationDto);
            }
            //----------------------------------------------------------------------------------------------------------
            m_modulDto.setApplication(m_applicationDtos);
            //----------------------------------------------------------------------------------------------------------
            m_modulDtos.add(m_modulDto);
        }
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(m_modulDtos)){
            //----------------------------------------------------------------------------------------------------------
            T_RoleMenu roleMenu = new T_RoleMenu();
            //----------------------------------------------------------------------------------------------------------
            roleMenu.setStatusEnabled(true);
            //----------------------------------------------------------------------------------------------------------
            roleMenu.setRoleCode(roleCode);
            //----------------------------------------------------------------------------------------------------------
            roleMenu.setMenuList(listMapToString(listModelToListMap(m_modulDtos)));
            //----------------------------------------------------------------------------------------------------------
            roleMenuRepo.save(roleMenu);
        }
    }

}

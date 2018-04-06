package com.microservice.implement;

import com.microservice.dto.*;
import com.microservice.model.*;
import com.microservice.repository.*;
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
    private CompanyProfileService companyProfileService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Autowired
    private CompanyRepo companyRepo;

    @Autowired
    private ModulRepo modulRepo;

    @Autowired
    private ApplicationRepo applicationRepo;

    @Autowired
    private ApiRegisterRepo apiRegisterRepo;

    @Autowired
    private RoleMenuRepo roleMenuRepo;


    @Override
    @Transactional(readOnly = false)
    public Map save(T_CompanyDto dto) {
        T_Company company = setModel(dto, new T_Company());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(T_CompanyDto dto) {
        T_Company company = setModel(dto,
                companyRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
    }

    @Override
    public Map delete(String primary) {
        T_Company company = setModel(
                companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        company.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(companyRepo.save(company));
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

    @Override
    @Transactional(readOnly = false)
    public Map registration_add(CompanyRegistrationDto dto){
        Map<String, Object> company = save(dto.getCompany());
        try {
            //----------------------------------------------------------------------------------------------------------
            if (CommonUtil.isNotNullOrEmpty(company)) {
                String companyCode = (String) getResult(company).get("code");
                //------------------------------------------------------------------------------------------------------
                T_CompanyProfileDto companyProfileDto = dto.getCompanyProfile();
                //------------------------------------------------------------------------------------------------------
                companyProfileDto.setCompanyCode(companyCode);
                //------------------------------------------------------------------------------------------------------
                Map<String, Object> companyProfile = companyProfileService.save(companyProfileDto);
                //======================================================================================================
                if (CommonUtil.isNotNullOrEmpty(companyProfile)) {
                    T_RoleDto roleDto = new T_RoleDto();
                    //--------------------------------------------------------------------------------------------------
                    roleDto.setStatusEnabled(true);
                    //--------------------------------------------------------------------------------------------------
                    roleDto.setCompanyCode(companyCode);
                    //--------------------------------------------------------------------------------------------------
                    roleDto.setRole("Administrator");
                    //--------------------------------------------------------------------------------------------------
                    Map<String, Object> role = roleService.save(roleDto);
                    //==================================================================================================
                    if (CommonUtil.isNotNullOrEmpty(role)) {
                        String emailAddress = (String) getResult(companyProfile).get("emailAddress");
                        //----------------------------------------------------------------------------------------------
                        String roleCode = (String) getResult(role).get("code");
                        //----------------------------------------------------------------------------------------------
                        String password = getDefaultPassword();
                        //----------------------------------------------------------------------------------------------
                        T_UserDto userDto = new T_UserDto();
                        //----------------------------------------------------------------------------------------------
                        userDto.setStatusEnabled(true);
                        //----------------------------------------------------------------------------------------------
                        userDto.setRoleCode(roleCode);
                        //----------------------------------------------------------------------------------------------
                        userDto.setUserName(emailAddress);
                        //----------------------------------------------------------------------------------------------
                        userDto.setPassword(new PasswordUtil().encryptPassword(password));
                        //----------------------------------------------------------------------------------------------
                        Map<String, Object> user = userService.save(userDto);
                        //----------------------------------------------------------------------------------------------
                        if (CommonUtil.isNotNullOrEmpty(user)) {
                            //------------------------------------------------------------------------------------------
                            List<Integer> listId = new ArrayList<>();
                            //------------------------------------------------------------------------------------------
                            listId.add(1);
                            //------------------------------------------------------------------------------------------
                            List<M_ModulDto> m_modulDtos = new ArrayList<>();
                            for (M_Modul m_modul : modulRepo.findByStatusEnabledAndIdIsIn(true, listId)) {
                                //--------------------------------------------------------------------------------------
                                M_ModulDto m_modulDto = setModel(m_modul, new M_ModulDto());
                                //--------------------------------------------------------------------------------------
                                List<M_ApplicationDto> m_applicationDtos = new ArrayList<>();
                                for(M_Application m_application : applicationRepo.findAllByStatusEnabledAndModulId(true, m_modul.getId())){
                                    //----------------------------------------------------------------------------------
                                    M_ApplicationDto m_applicationDto = setModel(m_application, new M_ApplicationDto());
                                    //----------------------------------------------------------------------------------
                                    List<M_ApiRegisterDto> m_apiRegisterDtos = new ArrayList<>();
                                    for(M_ApiRegister m_apiRegister : apiRegisterRepo.findAllByStatusEnabledAndApplicationId(true, m_application.getId())){
                                        //------------------------------------------------------------------------------
                                        M_ApiRegisterDto m_apiRegisterDto = setModel(m_apiRegister, new M_ApiRegisterDto());
                                        //------------------------------------------------------------------------------
                                        m_apiRegisterDtos.add(m_apiRegisterDto);
                                    }
                                    m_applicationDto.setApiRegister(m_apiRegisterDtos);
                                    //----------------------------------------------------------------------------------
                                    m_applicationDtos.add(m_applicationDto);
                                }
                                m_modulDto.setApplication(m_applicationDtos);
                                //--------------------------------------------------------------------------------------
                                m_modulDtos.add(m_modulDto);
                            }

                            if(CommonUtil.isNotNullOrEmpty(m_modulDtos)){
                                T_RoleMenu roleMenu = new T_RoleMenu();
                                roleMenu.setStatusEnabled(true);
                                //--------------------------------------------------------------------------------------
                                roleMenu.setRoleCode(roleCode);
                                //--------------------------------------------------------------------------------------
                                roleMenu.setMenuList(listMapToString(listModelToListMap(m_modulDtos)));

                                roleMenuRepo.save(roleMenu);
                            }
                        }
                        //==============================================================================================
                        emailService.sendEmail("User Default", "Username : " + emailAddress + "\n" + "Password : " + password, emailAddress);
                    }
                }
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return company;
    }

    @Override
    @Transactional(readOnly = false)
    public Map registration_update(CompanyRegistrationDto dto){
        Map<String, Object> company = update(dto.getCompany());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)) {
            T_CompanyProfileDto companyProfileDto = dto.getCompanyProfile();
            //----------------------------------------------------------------------------------------------------------
            companyProfileDto.setCompanyCode((String)company.get("code"));
            //----------------------------------------------------------------------------------------------------------
            companyProfileService.update(companyProfileDto);
        }
        return company;
    }

    @Override
    @Transactional(readOnly = false)
    public Map registration_delete(CompanyRegistrationDto dto){
        Map<String, Object> company = delete(dto.getCompany().getCode());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)) {
            companyProfileService.delete(dto.getCompanyProfile().getCode());
        }
        return company;
    }
}

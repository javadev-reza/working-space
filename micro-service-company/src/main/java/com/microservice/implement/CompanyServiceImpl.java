package com.microservice.implement;

import com.microservice.dto.*;
import com.microservice.model.*;
import com.microservice.service.*;
import com.microservice.util.CommonUtil;
import com.microservice.util.DateUtil;
import com.microservice.util.PasswordUtil;
import com.microservice.util.RestExceptionUtil;
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

    @Autowired
    private EmployeeService employeeService;

    @Override
    @Transactional(readOnly = false)
    public Map save(T_CompanyDto dto) {
        //--------------------------------------------------------------------------------------------------------------
        String password = getDefaultPassword();
        //--------------------------------------------------------------------------------------------------------------
        dto.setDateJoined(DateUtil.now());
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNullOrEmpty(
                companyRepo.findByStatusEnabledAndCompanyOrEmailAddress(true, dto.getCompany(), dto.getEmailAddress()))){
            //----------------------------------------------------------------------------------------------------------
            T_Company company = companyRepo.save(setModel(dto, new T_Company()));
            //----------------------------------------------------------------------------------------------------------
            if (CommonUtil.isNotNullOrEmpty(company)) {
                //------------------------------------------------------------------------------------------------------
                Map<String, Object> role = saveRole(company);
                //------------------------------------------------------------------------------------------------------
                if (CommonUtil.isNotNullOrEmpty(role)) {
                    //--------------------------------------------------------------------------------------------------
                    saveRoleMenu(role);
                    //--------------------------------------------------------------------------------------------------
                    saveUserEmployee(company, password, role);
                    //--------------------------------------------------------------------------------------------------
                    emailing("User Default", "Username : " +
                            company.getEmailAddress() + "\n" + "Password : " + password, company.getEmailAddress());
                }
            }
            return setResult(company);
        } else {
            throw new RestExceptionUtil.ForbiddenException("Company/Email Address is already registered");
        }
    }

    @Override
    @Transactional(readOnly = false)
    public Map update(T_CompanyDto dto) {
        T_Company company =
                companyRepo.save(setModel(dto.getCompany(), companyRepo.findByStatusEnabledAndCode(true, dto.getCode())));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(company);
    }

    @Override
    @Transactional(readOnly = false)
    public Map delete(String primary) {
        T_Company company = setModel(companyRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        company.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        company = companyRepo.save(company);
        //--------------------------------------------------------------------------------------------------------------
        if(CommonUtil.isNotNullOrEmpty(company)){
            //----------------------------------------------------------------------------------------------------------
            for(T_Role role : roleRepo.findByStatusEnabledAndCompanyCode(true, company.getCode())){
                //--------------------------------------------------------------------------------------------------
                role.setStatusEnabled(false);
                //------------------------------------------------------------------------------------------------------
                roleRepo.save(role);
                //------------------------------------------------------------------------------------------------------

                for(T_Employee employee : employeeRepo.findByStatusEnabledAndRoleCode(true, role.getCode())){
                    //--------------------------------------------------------------------------------------------------
                    employee.setStatusEnabled(false);
                    //--------------------------------------------------------------------------------------------------
                    employeeRepo.save(employee);

                    T_User user = userRepo.findByStatusEnabledAndCode(true, employee.getUserCode());
                    //--------------------------------------------------------------------------------------------------
                    user.setStatusEnabled(false);
                    //--------------------------------------------------------------------------------------------------
                    userRepo.save(user);
                }
            }
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
    public void saveRoleMenu(Map<String, Object> role){
        String roleCode = (String) getResult(role).get("code");
        //--------------------------------------------------------------------------------------------------------------
        List<Integer> listId = new ArrayList<>();
        //--------------------------------------------------------------------------------------------------------------
        listId.add(1);
        listId.add(2);
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

    @Transactional(readOnly = false)
    public void saveUserEmployee(T_Company company, String password, Map<String, Object> role){
        String roleCode = (String) getResult(role).get("code");
        //--------------------------------------------------------------------------------------------------------------
        T_UserDto userDto = new T_UserDto();
        //--------------------------------------------------------------------------------------------------------------
        userDto.setStatusEnabled(true);
        //--------------------------------------------------------------------------------------------------------------
        userDto.setUserName(company.getEmailAddress());
        //--------------------------------------------------------------------------------------------------------------
        userDto.setPassword(new PasswordUtil().encryptPassword(password));
        //--------------------------------------------------------------------------------------------------------------
        Map<String, Object> user = userService.save(userDto);

        if(CommonUtil.isNotNullOrEmpty(user)) {
            String userCode = (String) getResult(user).get("code");
            //----------------------------------------------------------------------------------------------------------
            T_EmployeeDto employeeDto = new T_EmployeeDto();
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setStatusEnabled(true);
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setUserCode(userCode);
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setRoleCode(roleCode);
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setFirstName("Administrator");
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setPhoneNumber("-");
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setEmailAddress(company.getEmailAddress());
            //----------------------------------------------------------------------------------------------------------
            employeeDto.setDateJoined(DateUtil.now());
            //----------------------------------------------------------------------------------------------------------
            employeeService.save(employeeDto);
        }
    }

}

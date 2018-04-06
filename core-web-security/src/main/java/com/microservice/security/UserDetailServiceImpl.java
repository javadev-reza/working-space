package com.microservice.security;

import com.microservice.dto.T_CompanyDto;
import com.microservice.dto.T_RoleDto;
import com.microservice.dto.T_UserDto;
import com.microservice.implement.BaseServiceImpl;
import com.microservice.model.T_Company;
import com.microservice.model.T_Role;
import com.microservice.model.T_User;
import com.microservice.repository.CompanyRepo;
import com.microservice.repository.RoleRepo;
import com.microservice.repository.UserRepo;
import com.microservice.util.CommonUtil;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.microservice.util.RestExceptionUtil.InternalServerErrorException;
import com.microservice.util.RestExceptionUtil.NotFoundException;
import org.json.JSONException;

public class UserDetailServiceImpl extends BaseServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepo userRepo_;

    @Autowired
    private RoleRepo roleRepo_;

    @Autowired
    private CompanyRepo companyRepo_;

    private final AccountStatusUserDetailsChecker 
            detailsChecker = new AccountStatusUserDetailsChecker();

    public UserDetailServiceImpl() {
        super();
    }
    
    @Override
    public final User loadUserByUsername(String headers) throws UsernameNotFoundException {
        String[] header = headers.split("-##-");
        //--------------------------------------------------------------------------------------------------------------
        UserDetails userDetails = null;
        //--------------------------------------------------------------------------------------------------------------
        T_User auth = userRepo_.findByStatusEnabledAndUserName(true, header[0]);
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(auth)) {
            GrantedAuthority authority = new SimpleGrantedAuthority("USER");
            userDetails = (UserDetails) new User(convert(auth, header[1]), auth.getPassword(), Arrays.asList(authority));
            detailsChecker.check(userDetails);
        } else {
            throw new NotFoundException("User name not found");
        }
        return (User) userDetails;
    }
    
    private String convert(T_User user, String from) {
        Map<String, Object> sessJson = new HashMap<>();
        //--------------------------------------------------------------------------------------------------------------
        if (CommonUtil.isNotNullOrEmpty(user)) {
            try {
                //------------------------------------------------------------------------------------------------------
                sessJson.put("from", from);
                //------------------------------------------------------------------------------------------------------
                sessJson.put("user", modelToMap(setModel(user, new T_UserDto())));
                //------------------------------------------------------------------------------------------------------
                if(CommonUtil.isNotNullOrEmpty(user.getRoleCode())){
                    //--------------------------------------------------------------------------------------------------
                    T_Role role = roleRepo_.findByStatusEnabledAndCode(true, user.getRoleCode());
                    //--------------------------------------------------------------------------------------------------
                    sessJson.put("role", modelToMap(setModel(role, new T_RoleDto())));
                    //--------------------------------------------------------------------------------------------------
                    if(CommonUtil.isNotNullOrEmpty(role.getCompanyCode())){
                        T_Company company = companyRepo_.findByStatusEnabledAndCode(true, role.getCompanyCode());
                        //----------------------------------------------------------------------------------------------
                        sessJson.put("company", modelToMap(setModel(company, new T_CompanyDto())));
                    } else{
                        sessJson.put("company", modelToMap(setModel(new T_CompanyDto())));
                    }
                } else{
                    sessJson.put("role", modelToMap(setModel(new T_RoleDto())));
                }
            } catch (JSONException e) {
                throw new InternalServerErrorException(e.getMessage());
            }
        }
        return mapToString(sessJson);
    }
}

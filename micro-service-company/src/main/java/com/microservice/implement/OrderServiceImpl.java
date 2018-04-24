package com.microservice.implement;

import com.microservice.dto.T_ServicesDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Services;
import com.microservice.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class OrderServiceImpl extends BaseServiceImpl implements OrderService {

    @Override
    public Map update(T_ServicesDto dto) {
        T_Services services = setModel(dto,
                servicesRepo.findByStatusEnabledAndProductEmployeeRoleCompanyCodeAndCode(
                        true, getSession().getCompany().getCode(), dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(servicesRepo.save(services));
    }

    @Override
    public Map getOne(String primary) {
        T_Services services = setModel(
                servicesRepo.findByStatusEnabledAndProductEmployeeRoleCompanyCodeAndCode(
                        true, getSession().getCompany().getCode(), primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(services);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Services> services =
                servicesRepo.findByStatusEnabledAndProductEmployeeRoleCompanyCodeAndProductProductIgnoreCaseContaining(
                        setPageRequest(pageDto), true, getSession().getCompany().getCode(), pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(services);
    }
}

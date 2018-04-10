package com.microservice.implement;

import com.microservice.dto.M_OrderStatusDto;
import com.microservice.model.M_OrderStatus;
import com.microservice.model.PageDto;
import com.microservice.repository.OrderStatusRepo;
import com.microservice.service.OrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class OrderStatusServiceImpl extends BaseServiceImpl implements OrderStatusService {


    @Override
    public Map save(M_OrderStatusDto dto) {
        M_OrderStatus orderStatus = setModel(dto, new M_OrderStatus());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(orderStatus);
    }

    @Override
    public Map update(M_OrderStatusDto dto) {
        M_OrderStatus orderStatus = setModel(dto,
                orderStatusRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(orderStatusRepo.save(orderStatus));
    }

    @Override
    public Map delete(Integer primary) {
        M_OrderStatus orderStatus = setModel(
                orderStatusRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        orderStatus.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(orderStatusRepo.save(orderStatus));
    }

    @Override
    public Map getOne(Integer primary) {
        M_OrderStatus orderStatus = setModel(
                orderStatusRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(orderStatus);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_OrderStatus> orderStatuses =
                orderStatusRepo.findByStatusEnabledAndOrderStatusIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(orderStatuses);
    }
}

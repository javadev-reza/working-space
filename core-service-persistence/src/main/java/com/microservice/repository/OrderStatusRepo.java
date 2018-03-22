package com.microservice.repository;

import com.microservice.model.M_OrderStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author reza
 */
@Repository
public interface OrderStatusRepo extends JpaRepository<M_OrderStatus, Integer> {
    M_OrderStatus findByStatusEnabledAndId(Boolean statusEnabled, Integer id);
    Page<M_OrderStatus> findByStatusEnabledAndOrderStatusIgnoreCaseContaining(Pageable pageable, Boolean statusEnabled, String orderStatus);

}

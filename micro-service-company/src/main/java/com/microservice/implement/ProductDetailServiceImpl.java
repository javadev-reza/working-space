package com.microservice.implement;

import com.microservice.dto.T_ProductDetailDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_ProductDetail;
import com.microservice.service.ProductDetailService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ProductDetailServiceImpl extends BaseServiceImpl implements ProductDetailService {


    @Override
    public Map save(T_ProductDetailDto dto) {
        T_ProductDetail productDetail = setModel(dto, new T_ProductDetail());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productDetailRepo.save(productDetail));
    }

    @Override
    public Map update(T_ProductDetailDto dto) {
        T_ProductDetail productDetail = setModel(
                productDetailRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productDetailRepo.save(productDetail));
    }

    @Override
    public Map delete(String primary) {
        T_ProductDetail productDetail = setModel(
                productDetailRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        productDetail.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productDetailRepo.save(productDetail));
    }

    @Override
    public Map getOne(String primary) {
        T_ProductDetail productDetail = setModel(
                productDetailRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productDetail);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_ProductDetail> productDetails =
                productDetailRepo.findByStatusEnabledAndPacketIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productDetails);
    }
}

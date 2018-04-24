package com.microservice.implement;

import com.microservice.dto.T_ProductDetailDto;
import com.microservice.dto.T_ProductDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Product;
import com.microservice.model.T_ProductDetail;
import com.microservice.service.ProductDetailService;
import com.microservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class ProductServiceImpl extends BaseServiceImpl implements ProductService {

    @Autowired
    private ProductDetailService productDetailService;

    @Override
    @Transactional(readOnly = false)
    public Map save(T_ProductDto dto) {
        T_Product product = productRepo.save(setModel(dto, new T_Product()));
        //--------------------------------------------------------------------------------------------------------------
        for(T_ProductDetailDto productDetailDto : dto.getProductDetail()){
            //----------------------------------------------------------------------------------------------------------
            productDetailDto.setProductCode(product.getCode());
            //----------------------------------------------------------------------------------------------------------
            productDetailService.save(productDetailDto);
        }
        return setResult(product);
    }

    @Override
    public Map update(T_ProductDto dto) {
        T_Product product = setModel(dto,
                productRepo.findByStatusEnabledAndCode(true, dto.getCode()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productRepo.save(product));
    }

    @Override
    public Map delete(String primary) {
        T_Product product = setModel(
                productRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productRepo.save(product));
    }

    @Override
    public Map getOne(String primary) {
        T_Product product = setModel(
                productRepo.findByStatusEnabledAndCode(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(product);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<T_Product> products =
                productRepo.findByStatusEnabledAndProductIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(products);
    }
}

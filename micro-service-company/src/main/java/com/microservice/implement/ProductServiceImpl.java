package com.microservice.implement;

import com.microservice.dto.T_ProductDto;
import com.microservice.model.PageDto;
import com.microservice.model.T_Product;
import com.microservice.repository.ProductRepo;
import com.microservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ProductServiceImpl extends BaseServiceImpl implements ProductService {


    @Override
    public Map save(T_ProductDto dto) {
        T_Product product = setModel(dto, new T_Product());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(productRepo.save(product));
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

package com.microservice.implement;

import com.microservice.dto.M_CountryDto;
import com.microservice.model.M_Country;
import com.microservice.model.PageDto;
import com.microservice.repository.CountryRepo;
import com.microservice.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 *
 * @author reza
 */
@Service
public class CountryServiceImpl extends BaseServiceImpl implements CountryService {


    @Override
    public Map save(M_CountryDto dto) {
        M_Country country = setModel(dto, new M_Country());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countryRepo.save(country));
    }

    @Override
    public Map update(M_CountryDto dto) {
        M_Country country = setModel(dto,
                countryRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countryRepo.save(country));
    }

    @Override
    public Map delete(Integer primary) {
        M_Country country = setModel(
                countryRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        country.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countryRepo.save(country));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Country country = setModel(
                countryRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(country);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Country> countries =
                countryRepo.findAllByStatusEnabledAndCountryIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(countries);
    }
}

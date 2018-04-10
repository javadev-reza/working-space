package com.microservice.implement;

import com.microservice.dto.M_BankDto;
import com.microservice.model.M_Bank;
import com.microservice.model.PageDto;
import com.microservice.repository.BankRepo;
import com.microservice.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BankServiceImpl extends BaseServiceImpl implements BankService {

    @Override
    public Map save(M_BankDto dto) {
        M_Bank bank = setModel(dto, new M_Bank());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(bankRepo.save(bank));
    }

    @Override
    public Map update(M_BankDto dto) {
        M_Bank bank = setModel(dto,
                bankRepo.findByStatusEnabledAndId(true, dto.getId()));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(bankRepo.save(bank));
    }

    @Override
    public Map delete(Integer primary) {
        M_Bank bank = setModel(
                bankRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        bank.setStatusEnabled(false);
        //--------------------------------------------------------------------------------------------------------------
        return setResult(bankRepo.save(bank));
    }

    @Override
    public Map getOne(Integer primary) {
        M_Bank bank = setModel(
                bankRepo.findByStatusEnabledAndId(true, primary));
        //--------------------------------------------------------------------------------------------------------------
        return setResult(bank);
    }

    @Override
    public Map getAll(PageDto pageDto) {
        Page<M_Bank> banks =
                bankRepo.findAllByStatusEnabledAndBankIgnoreCaseContaining(
                        setPageRequest(pageDto), true, pageDto.getFindBy());
        //--------------------------------------------------------------------------------------------------------------
        return setResult(banks);
    }
}

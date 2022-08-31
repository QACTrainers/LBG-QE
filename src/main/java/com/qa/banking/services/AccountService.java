package com.qa.banking.services;

import com.qa.banking.dtos.*;
import com.qa.banking.entities.Account;
import com.qa.banking.entities.Customer;
import com.qa.banking.repos.AccountRepository;
import com.qa.banking.repos.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountService {

    private ModelMapper mapper;

    public AccountRepository repo;

    @Autowired
    public AccountService(AccountRepository repo) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<Account> findAll(){
        return this.repo.findAll();
    }

    public void updateAccount(UpdateAccountDto account) {
        this.repo.update(
                account.getId(),
                account.getBranch(),
                account.getType(),
                account.getNumber(),
                account.getMinDeposit(),
                account.getBalance()
        );
    }

    public void deleteAccount(Long id) { this.repo.deleteById(id); }

    public AccountDto createAccount(CreateAccountDto account) {
        return this.mapper.map(this.repo.saveAndFlush(this.mapper.map(account, Account.class)),AccountDto.class);
    }
}

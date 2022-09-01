package com.qa.banking.services;

import com.qa.banking.dtos.*;
import com.qa.banking.entities.Account;
import com.qa.banking.entities.CustomerAccount;
import com.qa.banking.repos.AccountRepository;
import com.qa.banking.repos.BranchRepository;
import com.qa.banking.repos.CustomerAccountsRepository;
import com.qa.banking.repos.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountService {

    private ModelMapper mapper;
    public AccountRepository repo;
    public BranchRepository branchRepository;
    public CustomerRepository customerRepository;

    public CustomerAccountsRepository customerAccountsRepository;

    @Autowired
    public AccountService(AccountRepository repo, ModelMapper mapper,BranchRepository branchRepository, CustomerAccountsRepository customerAccountsRepository,CustomerRepository customerRepository) {
        this.repo = repo;
        this.mapper = mapper;
        this.branchRepository = branchRepository;
        this.customerAccountsRepository = customerAccountsRepository;
        this.customerRepository = customerRepository;
    }

    public List<Account> findAll(){
        return this.repo.findAll();
    }

    public void updateAccount(UpdateAccountDto account) {

        Account updatedAccount = this.repo.findById(account.getId()).get();

        updatedAccount.setBranch(branchRepository.findByName(account.getBranch()).get());
        updatedAccount.setType(account.getType());
        updatedAccount.setMinDeposit(BigDecimal.valueOf(10));
        updatedAccount.setNumber(account.getNumber());

        customerAccountsRepository.deleteAll(updatedAccount.getCustomerAccounts());

        List<CustomerAccount> customerAccounts = this.customerAccountsRepository.saveAll(account.getCustomerIds().stream()
                .map(x-> new CustomerAccount(
                        this.customerRepository.findById(x).get(),
                        updatedAccount
                )).collect(Collectors.toList()));
    }

    private List<Long> customerIds;

    public Void deleteAccount(Long id) { this.repo.deleteById(id);
    return null;}

    public AccountDto createAccount(CreateAccountDto account) {
        Account newAccount = new Account();
        newAccount.setBranch(branchRepository.findByName(account.getBranch()).get());
        newAccount.setType(account.getType());
        newAccount.setBalance(account.getBalance());
        newAccount.setMinDeposit(BigDecimal.valueOf(10));
        newAccount.setNumber(account.getNumber());
        newAccount = this.repo.save(newAccount);


        Account finalNewAccount = newAccount;
        List<CustomerAccount> customerAccounts = this.customerAccountsRepository.saveAll(account.getCustomerIds().stream()
                .map(x-> new CustomerAccount(
                    this.customerRepository.findById(x).get(),
                    finalNewAccount
                )).collect(Collectors.toList()));

        return new AccountDto(
                newAccount.getId(),
                newAccount.getBranch().getName(),
                newAccount.getType(),
                newAccount.getNumber(),
                newAccount.getMinDeposit(),
                newAccount.getBalance(),
                customerAccounts.stream().
                map(z->new AccountSharedWithCustomersDto(
                        z.getCustomer().getId(),
                        z.getCustomer().getSurname(),
                        z.getCustomer().getFirstName()
                )).collect(Collectors.toList())
        );
    }

    public BigDecimal transact(TransactDto transactDto) {
        this.repo.transact(transactDto.getAccountId(),transactDto.getTransferAmount());
        return this.repo.findById(transactDto.getAccountId()).get().getBalance();
    }
}

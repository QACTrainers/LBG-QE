package com.qa.banking.services;

import com.qa.banking.dtos.AccountDto;
import com.qa.banking.dtos.AccountSharedWithCustomersDto;
import com.qa.banking.dtos.CustomerDto;
import com.qa.banking.dtos.CustomerFiltersDto;
import com.qa.banking.entities.*;
import com.qa.banking.repos.CustomerRepository;
import com.qa.banking.repos.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    private ModelMapper mapper;

    public CustomerRepository repo;

    @Autowired
    public CustomerService(CustomerRepository repo, ModelMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<CustomerDto> findCustomers(CustomerFiltersDto customerFiltersDto){
//        return this.repo.findAll().stream().map(x->new CustomerDto(
//                x.getTitle(),
//                x.getSurname(),
//                x.getFirstName(),
//                x.getDateOfBirth(),
//                x.getGender(),
//                x.getCustomerType(),
//                x.getAddress1(),
//                x.getAddress2()
//        )).collect(Collectors.toList());
        return null;
    }

    public List<CustomerDto> findAll(){
        return this.repo.findAll().stream().map(x->new CustomerDto(
            x.getTitle(),
            x.getSurname(),
            x.getFirstName(),
            x.getDateOfBirth(),
            x.getGender(),
            x.getCustomerType(),
            x.getAddress1(),
            x.getAddress2(),
            x.getCustomerAccounts().stream().map(y->new AccountDto(
                y.getAccount().getId(),
                    y.getAccount().getBranch(),
                    y.getAccount().getType(),
                    y.getAccount().getNumber(),
                    y.getAccount().getMinDeposit(),
                    y.getAccount().getBalance(),
                    y.getAccount().getCustomerAccounts().stream().
                            filter(z->{
                                if (z.getCustomer().getId() == x.getId()) {
                                    return false;
                                } else {
                                    return true;
                                }}).
                            map(z->new AccountSharedWithCustomersDto(
                            z.getCustomer().getId(),
                            z.getCustomer().getSurname(),
                            z.getCustomer().getFirstName()
                    )).collect(Collectors.toList())
            )).collect(Collectors.toList())
        )).collect(Collectors.toList());

    }
}

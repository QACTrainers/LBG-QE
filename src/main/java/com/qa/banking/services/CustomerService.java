package com.qa.banking.services;

import com.qa.banking.dtos.CustomerDto;
import com.qa.banking.dtos.CustomerFiltersDto;
import com.qa.banking.entities.Customer;
import com.qa.banking.entities.User;
import com.qa.banking.repos.CustomerRepository;
import com.qa.banking.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    public CustomerRepository repo;

    @Autowired
    public CustomerService(CustomerRepository repo) {
        this.repo = repo;
    }

    public List<CustomerDto> findCustomers(CustomerFiltersDto customerFiltersDto){
        return this.repo.findAll().stream().map(x->new CustomerDto(
                x.getTitle(),
                x.getSurname(),
                x.getFirstName(),
                x.getDateOfBirth(),
                x.getGender(),
                x.getCustomerType(),
                x.getAddress1(),
                x.getAddress2()
        )).collect(Collectors.toList());
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
                x.getAddress2()
        )).collect(Collectors.toList());
    }
}

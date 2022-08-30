package com.qa.banking.services;

import com.qa.banking.dtos.*;
import com.qa.banking.entities.*;
import com.qa.banking.repos.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return this.repo.findAll().stream()
                .filter(x-> {
                    if (!customerFiltersDto.getAccount_nr().isEmpty() &&
                            !x.getCustomerAccounts().stream().anyMatch(y->y.getAccount().getId()==Long.valueOf(customerFiltersDto.getAccount_nr()))) {
                        return false;
                    }else if ((!customerFiltersDto.getCustomer_nr().isEmpty() && Long.valueOf(customerFiltersDto.getCustomer_nr()) != x.getId())) {
                        return false;
                    }else if(!customerFiltersDto.getSurname().isEmpty() && !customerFiltersDto.getSurname().toLowerCase().equals(x.getSurname().toLowerCase())){
                        return false;
                    }else if(!customerFiltersDto.getEmail().isEmpty() && !customerFiltersDto.getEmail().toLowerCase().equals(x.getEmail().toLowerCase())){
                        return false;
                    }else if(!customerFiltersDto.getPostcode().isEmpty() && !customerFiltersDto.getPostcode().toLowerCase().equals(x.getPostcode().toLowerCase())){
                        return false;
                    }
                    return true;
                })
                .map(x->new CustomerDto(
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
                            y.getAccount().getBranch().getName(),
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
                    y.getAccount().getBranch().getName(),
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

    public CustomerDto createCustomer(CreateCustomerDto customer) {
        return this.mapper.map(this.repo.saveAndFlush(this.mapper.map(customer,Customer.class)),CustomerDto.class);
    }
    public void updateCustomer(UpdateCustomerDto customer) {
        this.repo.update(
                customer.getId(),
                customer.getTitle(),
                customer.getSurname(),
                customer.getFirstName(),
                customer.getDateOfBirth(),
                customer.getGender(),
                customer.getCustomerType(),
                customer.getAddress1(),
                customer.getAddress2(),
                customer.getCityTown(),
                customer.getPostcode(),
                customer.getPhoneNo(),
                customer.getEmail()
        );
    }

    public void deleteCustomer(Long id) {
        this.repo.deleteById(id);
    }
}

package com.qa.banking.controllers;

import com.qa.banking.dtos.CustomerDto;
import com.qa.banking.dtos.CustomerFiltersDto;
import com.qa.banking.dtos.UpdateCustomerDto;
import com.qa.banking.entities.Customer;
import com.qa.banking.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // refresh
    @PostMapping("/filter")
    public ResponseEntity<List<CustomerDto>> findCustomers(@RequestBody CustomerFiltersDto customerFilters) {
        return new ResponseEntity<List<CustomerDto>>(this.customerService.findCustomers(customerFilters), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<CustomerDto>> findAll() {
        return new ResponseEntity<List<CustomerDto>>(this.customerService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update")
    public void update(@RequestBody UpdateCustomerDto customer) {
        this.customerService.updateCustomer(customer);
    }

}

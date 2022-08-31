package com.qa.banking.controllers;

import com.qa.banking.dtos.*;
import com.qa.banking.entities.Account;
import com.qa.banking.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/account")
public class AccountController {

    private AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    //findAll
    @GetMapping("/findAll")
    public ResponseEntity<List<Account>> findAll() {
        return new ResponseEntity<List<Account>>(this.accountService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update")
    public void update(@RequestBody UpdateAccountDto account) {
        this.accountService.updateAccount(account);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        this.accountService.deleteAccount(id);
    }

    @PostMapping("/create")
    public AccountDto create(@RequestBody CreateAccountDto createAccountDto){
        return this.accountService.createAccount(createAccountDto);
    }

}

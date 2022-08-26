package com.qa.banking.controllers;

import com.qa.banking.dtos.LoginInfoDto;
import com.qa.banking.dtos.UserInfo;
import com.qa.banking.entities.User;
import com.qa.banking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // refresh
    @PostMapping("/login")
    public ResponseEntity<LoginInfoDto> login(@RequestBody UserInfo userInfo) {
        return new ResponseEntity<LoginInfoDto>(this.userService.login(userInfo.getUsername(),userInfo.getPassword()), HttpStatus.OK);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return new ResponseEntity<String>("hello", HttpStatus.OK);
    }
}

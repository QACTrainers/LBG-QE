package com.qa.banking.controllers;

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
    @GetMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserInfo userInfo) {
        return new ResponseEntity<User>(this.userService.login(userInfo.getUsername(),userInfo.getPassword()), HttpStatus.OK);
    }
}

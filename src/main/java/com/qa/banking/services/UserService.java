package com.qa.banking.services;

import com.qa.banking.entities.User;
import com.qa.banking.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User login(String username, String password){
        return this.repo.verifyUser(username,password).get();
    }
}

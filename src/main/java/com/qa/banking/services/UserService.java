package com.qa.banking.services;

import com.qa.banking.dtos.LoginInfoDto;
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

    public LoginInfoDto login(String username, String password) {

        if (this.repo.verifyUser(username, password).isPresent()) {
            this.repo.resetLoginAttempts(username);
            User user = this.repo.verifyUser(username, password).get();
            return new LoginInfoDto(user.getUsername(), user.getLoginAttempts(), user.getIsAdmin());
        } else {
            this.repo.incrementLoginAttempts(username);
            User user = this.repo.getUser(username).get();
            return new LoginInfoDto(user.getUsername(), user.getLoginAttempts(), user.getIsAdmin());
        }

    }

}

package com.qa.banking.services;

import com.qa.banking.dtos.LoginInfoDto;
import com.qa.banking.entities.User;
import com.qa.banking.exceptions.IncorrectPasswordException;
import com.qa.banking.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    public UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public LoginInfoDto login(String username, String password) throws IncorrectPasswordException {

        Optional<User> userOptional = this.repo.verifyUser(username, password);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if(user.getLoginAttempts()>0){
                this.repo.resetLoginAttempts(username);
            }
            return new LoginInfoDto(user.getId(), user.getUsername(), user.getLoginAttempts(), user.isAdmin());
        } else {
            this.repo.incrementLoginAttempts(username);
            throw new IncorrectPasswordException("incorrect password");
        }

    }

}

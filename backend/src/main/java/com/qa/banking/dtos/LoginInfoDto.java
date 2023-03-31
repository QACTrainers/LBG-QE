package com.qa.banking.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginInfoDto {

    private long id;
    private String username;
    private int loginAttempts;
    private boolean isAdmin;

}

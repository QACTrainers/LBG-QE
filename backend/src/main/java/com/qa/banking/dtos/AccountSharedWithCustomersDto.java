package com.qa.banking.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AccountSharedWithCustomersDto {

    private Long id;
    private String surname;
    private String firstName;

}

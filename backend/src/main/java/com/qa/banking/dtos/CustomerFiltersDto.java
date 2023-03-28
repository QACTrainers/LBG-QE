package com.qa.banking.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerFiltersDto {

    private String account_nr;
    private String customer_nr;
    private String surname;
    private String email;
    private String postcode;

}

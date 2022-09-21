package com.qa.banking.dtos;

import lombok.*;
import java.sql.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomerDto {

    private Long id;
    private String title;
    private String surname;
    private String firstName;
    private Date dateOfBirth;
    private String gender;
    private String customerType;
    private String address1;
    private String address2;
    private String cityTown;
    private String postcode;
    private String phoneNo;
    private String email;
    private List<AccountDto> accounts;

}

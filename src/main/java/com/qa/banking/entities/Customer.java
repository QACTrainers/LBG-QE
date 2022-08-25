package com.qa.banking.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private String placeOfBirth;
    private String motherMaidenName;

    @OneToMany(targetEntity = CustomerAccount.class,cascade = CascadeType.ALL,mappedBy = "id",fetch = FetchType.LAZY)
    private List<CustomerAccount> customerAccounts;
}

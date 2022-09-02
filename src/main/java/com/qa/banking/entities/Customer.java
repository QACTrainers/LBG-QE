package com.qa.banking.entities;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 10)
    private String title;

    @Column(nullable = false, length = 25)
    private String surname;

    @Column(nullable = false, length = 20)
    private String firstName;

    private Date dateOfBirth;

    @Column(length = 1)
    private String gender;

    @Column(nullable = false, length = 9)
    private String customerType;

    @Column(nullable = false, length = 50)
    private String address1;

    @Column(length = 50)
    private String address2;

    @Column(nullable = false, length = 20)
    private String cityTown;

    @Column(nullable = false, length = 8)
    private String postcode;

    @Column(length = 12)
    private String phoneNo;

    @Column(length = 50)
    private String email;

    @Column(length = 20)
    private String placeOfBirth;

    @Column(length = 20)
    private String motherMaidenName;

    @OneToMany(mappedBy = "customer")
    private List<CustomerAccount> customerAccounts;
}

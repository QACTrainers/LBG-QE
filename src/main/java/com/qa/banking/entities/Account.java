package com.qa.banking.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "branch_id", nullable = false)
    private Branch branch;

    @OneToMany(mappedBy = "account", cascade = CascadeType.REMOVE)
    private List<CustomerAccount> customerAccounts;

    @Column(nullable=false, length=25)
    private String type;

    @Column(length = 25)
    private String number;

    @Column(length = 9)
    private BigDecimal minDeposit;

    @Column(nullable = false,length = 15)
    private BigDecimal balance;
}

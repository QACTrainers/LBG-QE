package com.qa.banking.dtos;

import com.qa.banking.entities.Branch;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AccountDto {

    private Long id;
    private Branch branch;
    private String type;
    private String number;
    private BigDecimal minDeposit;
    private BigDecimal balance;
    private List<AccountSharedWithCustomersDto> sharedWithCustomers;

}

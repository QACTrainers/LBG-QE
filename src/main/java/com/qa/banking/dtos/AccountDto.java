package com.qa.banking.dtos;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AccountDto {

    private Long id;
    private String branch;
    private String type;
    private String number;
    private BigDecimal minDeposit;
    private BigDecimal balance;
    private List<AccountSharedWithCustomersDto> sharedWithCustomers;

}

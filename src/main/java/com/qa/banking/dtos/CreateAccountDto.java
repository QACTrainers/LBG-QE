package com.qa.banking.dtos;

import lombok.*;

import java.math.BigDecimal;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CreateAccountDto {

    private Long branch;
    private String type;
    private String number;
    private BigDecimal minDeposit;
    private BigDecimal balance;

}

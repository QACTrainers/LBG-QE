package com.qa.banking.dtos;

import lombok.*;

import java.math.BigDecimal;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TransactDto {
    private Long accountId;
    private BigDecimal transactionAmount;
}

package com.qa.banking.dtos;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CreateAccountDto {

    private String branch;
    private List<Long> customerIds;
    private String type;
    private BigDecimal balance;
    private String number;

}

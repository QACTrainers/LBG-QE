package com.qa.banking.dtos;

import com.qa.banking.entities.Branch;
import com.qa.banking.entities.CustomerAccount;
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
public class UpdateAccountDto {

    private Long id;
    private Long branchId;
    private String type;
    private String number;
    private List<Long> customerIds;
}

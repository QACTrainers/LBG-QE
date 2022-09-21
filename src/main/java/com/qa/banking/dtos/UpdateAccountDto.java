package com.qa.banking.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateAccountDto {

    private Long id;
    private String branch;
    private String type;
    private String number;
    private List<Long> customerIds;
}

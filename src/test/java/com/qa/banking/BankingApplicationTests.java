package com.qa.banking;

import com.qa.banking.dtos.CustomerDto;
import com.qa.banking.repos.CustomerRepository;
import com.qa.banking.services.CustomerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BankingApplicationTests {

	private CustomerService customerService;
	public CustomerRepository repo;
	@Autowired
	public BankingApplicationTests(CustomerService customerService,CustomerRepository repo) {
		this.customerService = customerService;
		this.repo = repo;
	}

	@Test
	@Transactional
	public void testCustomerMapping(){
		List<CustomerDto> customerDtos = this.customerService.findAll();
		assertEquals(2,customerDtos.get(0).getAccounts().size());
	}

}

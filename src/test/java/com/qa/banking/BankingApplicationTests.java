package com.qa.banking;

import com.qa.banking.dtos.CustomerDto;
import com.qa.banking.entities.Customer;
import com.qa.banking.entities.CustomerAccount;
import com.qa.banking.repos.CustomerRepository;
import com.qa.banking.services.CustomerService;
import org.assertj.core.api.Assert;
import org.hibernate.annotations.Where;
import org.junit.jupiter.api.Test;
import org.junit.platform.engine.support.discovery.SelectorResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

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
	public void findAllFuturesTest(){
		List<Customer> customers = this.repo.findAll();
		List<CustomerDto> customerDtos = this.customerService.findAll();
		assertEquals(2,customerDtos.get(0).getAccounts().size());
	}

	@Test
	public void test(){
		String[] strings = {"cancel","peanut","harbor","throat","cattle","unfair","favour"};
		String guess1 = "favour";
		String guess2 = "cancel";
		int result1 = 2;
		int result2 = 3;

		List<String> result = Arrays.stream(strings).filter(x-> {
			if(MatchingCharacters(x,guess1)!=result1 || MatchingCharacters(x,guess2)!=result2 ){
				return false;
			} else return true;
		}).collect(Collectors.toList());

		System.out.println(result.get(0) + " " + result.size());
	}

		public int MatchingCharacters(String str1, String str2) {
			char[] arr = str1.toCharArray();
			char[] arr2 = str2.toCharArray();
			HashMap<Character,Integer> hMap = new HashMap<>();
			HashMap<Character,Integer> hMap2 = new HashMap<>();
			for(int i = 0 ; i < arr.length ; i++) {
				if(!hMap.containsKey(arr[i])) {
					hMap.put(arr[i],1);
				}
			}
			for(int i = 0 ;i <arr2.length ;i++) {
				if(hMap.containsKey(arr2[i])) {
					hMap2.put(arr2[i],1);
				}
			}
			return hMap2.size();
		}

}

package com.qa.banking.repos;

import com.qa.banking.entities.Account;
import com.qa.banking.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

}


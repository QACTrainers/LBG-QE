package com.qa.banking.repos;

import com.qa.banking.entities.CustomerAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerAccountsRepository extends JpaRepository<CustomerAccount, Long> {

}


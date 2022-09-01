package com.qa.banking.repos;

import com.qa.banking.entities.Branch;
import com.qa.banking.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {

}


package com.qa.banking.repos;

import com.qa.banking.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    @Modifying
    @Transactional
    @Query(value = "update account set " +
            "branch_id = ?2, " +
            "type = ?3, " +
            "number = ?4, " +
            "min_deposit = ?5, " +
            "balance = ?6 " +
            "where id = ?1", nativeQuery = true)
    void update
            (Long id,
             Long branch,
             String type,
             String number,
             BigDecimal minDeposit,
             BigDecimal balance);

    @Modifying
    @Transactional
    @Query(value = "update account set " +
            "balance = balance + ?2 " +
            "where id = ?1", nativeQuery = true)
    void transact(Long id, BigDecimal transferAmount);
}


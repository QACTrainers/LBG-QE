package com.qa.banking.repos;

import com.qa.banking.entities.Customer;
import com.qa.banking.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Modifying
    @Transactional
    @Query(value = "update customer set " +
            "title = ?2, " +
            "surname = ?3, " +
            "first_name = ?4, " +
            "date_of_birth = ?5, " +
            "gender = ?6, " +
            "customer_type = ?7, " +
            "address1 = ?8, " +
            "address2 = ?9, " +
            "city_town = ?10, " +
            "postcode = ?11, " +
            "phone_no = ?12, " +
            "email = ?13 " +
            "where id = ?1", nativeQuery = true)
    void update
            (Long id,
             String title,
             String surname,
             String firstName,
             Date dateOfBirth,
             String gender,
             String customerType,
             String address1,
             String address2,
             String cityTown,
             String postcode,
             String phoneNo,
             String email);
}


package com.qa.banking.repos;

import com.qa.banking.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from user where username = ?1 and password = ?2", nativeQuery = true)
    Optional<User> verifyUser(String username, String password);

}


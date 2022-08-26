package com.qa.banking.repos;

import com.qa.banking.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from user where username = ?1 and password = ?2", nativeQuery = true)
    Optional<User> verifyUser(String username, String password);

    @Query(value = "select * from user where username = ?1", nativeQuery = true)
    Optional<User> getUser(String username);

    @Modifying
    @Query(value = "update user set login_attempts = login_attempts + 1 where username = ?1", nativeQuery = true)
    void incrementLoginAttempts(String username);

    @Modifying
    @Query(value = "update user set login_attempts = 0 where username = ?1", nativeQuery = true)
    void resetLoginAttempts(String username);

}


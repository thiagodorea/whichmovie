package com.tdorea.whichmovie.repositories;

import com.tdorea.whichmovie.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    
    User findByEmail(String email);
}

package com.example.goalgrid.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.goalgrid.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findFirstByUsername(String username);
}

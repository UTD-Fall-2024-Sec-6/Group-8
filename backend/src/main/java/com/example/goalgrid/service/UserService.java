package com.example.goalgrid.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.goalgrid.repository.UserRepository;

import com.example.goalgrid.model.User;

@Service
public class UserService {
	@Autowired
    private  UserRepository userRepository;
    
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    
    public User postUser(User user) {
    	Random rd = new Random();
		user.setId(System.currentTimeMillis()+rd.nextInt(1000));
    	user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user); // Ensure it saves the user properly
    }
    public boolean usernameExists(User user) {
    	System.out.println(userRepository.findFirstByUsername(user.getUsername()));
		return (userRepository.findFirstByUsername(user.getUsername())!=null);
	
    }
    public String verifyUser(User user) {
    	try {
    		Authentication authentication = authenticationManager.
        			authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        	if(authentication.isAuthenticated()) 
    			return jwtService.generateToken(user.getUsername());
        	return null;
		} catch (Exception e) {
			System.out.println("Authentication failed: " + e.getMessage());
			return null;
		}
	}
    public User findUser(String username) {
		return userRepository.findFirstByUsername(username);
	}
}

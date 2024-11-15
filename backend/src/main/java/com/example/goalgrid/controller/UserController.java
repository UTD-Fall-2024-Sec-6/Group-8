package com.example.goalgrid.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.goalgrid.model.User;
import com.example.goalgrid.service.JWTService;
import com.example.goalgrid.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@SessionAttributes
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
	
	@Autowired
    private  UserService userService;

	@Autowired
	JWTService jwtService;
	
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User user) {
    	try {
    		boolean checkUsername = userService.usernameExists(user);
        	if(checkUsername) {
        		return ResponseEntity.ok("null");
        	}        		
    		User saveUser = userService.postUser(user);
    		return ResponseEntity.ok(jwtService.generateToken(saveUser.getUsername()));
		} catch (IllegalArgumentException e) {
			return ResponseEntity.ok(e.getMessage());
		}
    }
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody User user) {
    	System.out.println(user);
    	return ResponseEntity.ok(userService.verifyUser(user));
    }
    @GetMapping("/check")
    public String checkToken(){
    	return "check";
    }
    
}
package com.example.goalgrid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.goalgrid.model.User;
import com.example.goalgrid.service.JWTService;
import com.example.goalgrid.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
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
    	String str = userService.verifyUser(user);
    	return ResponseEntity.ok(str);
    }
    
    @GetMapping("/dashboard")
    public ResponseEntity<String> checkToken(@RequestHeader("Authorization") String token){
    	token = token.substring(7);
    	String username = jwtService.extractUserName(token);
    	if(username!=null)
    		return ResponseEntity.ok(userService.findUser(username).getName());
    	return ResponseEntity.ofNullable("Null");
    }
}
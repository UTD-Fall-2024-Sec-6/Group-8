package com.example.goalgrid.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.goalgrid.model.Grid;
import com.example.goalgrid.repository.GridRepository;
import com.example.goalgrid.service.GridService;
import com.example.goalgrid.service.JWTService;
import com.example.goalgrid.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/grid")
@RequiredArgsConstructor
@CrossOrigin("*")
public class GridController {

	@Autowired
	private GridService gridService;
	@Autowired
	private JWTService jwtService;
	@Autowired
	private UserService userService;
	@Autowired
	private GridRepository gridRepository;
	
	@PostMapping("addGrid")
    public ResponseEntity<List<Grid>> createGrid(@RequestHeader("Authorization") String token, @RequestBody Grid grid) {
    	token = token.substring(7);
    	String username = jwtService.extractUserName(token);
    	gridService.postGrid(username, grid);
    	List<Grid> grids = gridService.getGrids(username);
        return ResponseEntity.ok(grids);
    }
	
	@GetMapping("getGrids")
    public ResponseEntity<List<Grid>> getGridsForUser(@RequestHeader("Authorization") String token) {
		token = token.substring(7);
    	String username = jwtService.extractUserName(token);
		List<Grid> grids = gridService.getGrids(username);
		System.out.println(grids);
        return ResponseEntity.ok(grids);
    }
}

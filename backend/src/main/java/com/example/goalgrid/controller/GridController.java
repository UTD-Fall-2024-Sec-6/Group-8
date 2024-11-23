package com.example.goalgrid.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.goalgrid.model.Goal;
import com.example.goalgrid.model.Grid;
import com.example.goalgrid.model.IdWrapper;
import com.example.goalgrid.model.SizeWrapper;
import com.example.goalgrid.service.GridService;
import com.example.goalgrid.service.JWTService;

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
        return ResponseEntity.ok(grids);
    }
	
	@PostMapping("deleteGrid")
    public ResponseEntity<List<Grid>> deleteGrid(@RequestHeader("Authorization") String token, @RequestBody IdWrapper id) {
		token = token.substring(7);
    	String username = jwtService.extractUserName(token);
		gridService.deleteGrid(username, id.getId());
		List<Grid> grids = gridService.getGrids(username);
        return ResponseEntity.ok(grids);
    }
	
	@GetMapping("getGrid/{gridId}")
    public ResponseEntity<Grid> getGridFromID(@PathVariable Long gridId) {
		return ResponseEntity.ok(gridService.getGridFromID(gridId));
    }
	
	@PostMapping("generate/{gridId}")
    public ResponseEntity<List<Goal>> generate(@PathVariable Long gridId, @RequestBody SizeWrapper size) {
		List<Goal> ls = gridService.generate(gridId, size.getSize());
		System.out.println(ls.size());
		return ResponseEntity.ok(gridService.generate(gridId, size.getSize()));
    }
}

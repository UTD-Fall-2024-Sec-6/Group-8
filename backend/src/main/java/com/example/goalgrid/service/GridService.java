package com.example.goalgrid.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.goalgrid.model.Grid;
import com.example.goalgrid.model.User;
import com.example.goalgrid.repository.GoalRepository;
import com.example.goalgrid.repository.GridRepository;
import com.example.goalgrid.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class GridService {

	@Autowired
    private UserRepository userRepository;

    @Autowired
    private GridRepository gridRepository;
    
    @Autowired
    private GoalRepository goalRepository;
    
	public Grid postGrid(String username, Grid grid) {
    	Random rd = new Random();
		grid.setId(System.currentTimeMillis()+rd.nextInt(1000));
    	User user = userRepository.findFirstByUsername(username);
        grid.setUser(user);
        return gridRepository.save(grid);
    }

	public List<Grid> getGrids(String username) {
		User user = userRepository.findFirstByUsername(username);
		return gridRepository.findByUserId(user.getId());
	}

	@Transactional
	public List<Grid> deleteGrid(String username, Long id) {
		goalRepository.deleteByGridId(id);
		gridRepository.deleteById(id);
		User user = userRepository.findFirstByUsername(username);
		return gridRepository.findByUserId(user.getId());
	}
}

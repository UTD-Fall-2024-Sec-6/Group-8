package com.example.goalgrid.service;

import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.goalgrid.model.Goal;
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
	
	public Grid getGridFromID(Long id) {
		return gridRepository.findById(id).get();
	}

	@Transactional
	public List<Goal> generate(Long gridId, int size) {
		Grid grid = gridRepository.findById(gridId).get();
		grid.setGenerate(true);
		grid.setSize(size);
	    gridRepository.save(grid);
		int actualSize = size * size;
		List<Goal> goals = goalRepository.findByGridId(gridId);
		List<Goal> toDelete = goals.subList(actualSize, goals.size());
        goalRepository.deleteAll(toDelete);
        goals = goals.subList(0, actualSize);
        Collections.shuffle(goals);
        for (int i = 0; i < actualSize; i++) {
            int row = i / size + 1;
            int column = i % size + 1;
            Goal goal = goals.get(i);
            System.out.println(goal.getName() + " " + row + " " +column);
            goal.setRow(row);
            goal.setColumn(column);
        }
        goalRepository.saveAll(goals);
		return goals;
	}
	
	public Grid saveStatus(Long gridId) {
		Grid grid = gridRepository.findById(gridId).get();
		List<Goal> goals = goalRepository.findByGridId(gridId);
		int size = grid.getSize();
		int[] rowMarks = new int[size];
		int[] colMarks = new int[size];
		int blackout = 0;
		int diagonal1 = 0; // Top-left to bottom-right
		int diagonal2 = 0; // Top-right to bottom-left
		for (Goal goal : goals) {
			System.out.println(goal.getName()+" "+goal.getRow()+" "+goal.getColumn()+" "+goal.isMarkComplete());
			if (goal.isMarkComplete()) {
				blackout++;
				int row = goal.getRow() - 1;
				int column = goal.getColumn() - 1;
		        rowMarks[row]++;
		        colMarks[column]++;
		        if (row == column) 
		            diagonal1++;
		        if (row + column == size) 
		            diagonal2++;
			}
		}
		if(blackout == size*size) {
			grid.setStatus(2);
			return gridRepository.save(grid);
		}
		for (int count : rowMarks) {
			if (count == size){
				grid.setStatus(1);
				return gridRepository.save(grid);
			}
		}
		for (int count : colMarks) {
		    if (count == size){
				grid.setStatus(1);
				return gridRepository.save(grid);
			}
		}
		if (diagonal1 == size || diagonal2 == size) {
			grid.setStatus(1);
			return gridRepository.save(grid);
		}
		return grid;
	}
}

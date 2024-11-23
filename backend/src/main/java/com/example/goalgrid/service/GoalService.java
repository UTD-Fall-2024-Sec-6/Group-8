package com.example.goalgrid.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.goalgrid.model.Goal;
import com.example.goalgrid.repository.GoalRepository;

@Service
public class GoalService {
    
    @Autowired
    private GoalRepository goalRepository;
    
	public Goal postGoal(Goal goal) {
    	Random rd = new Random();
		goal.setId(System.currentTimeMillis()+rd.nextInt(1000));
        return goalRepository.save(goal);
    }

	public List<Goal> getGoals(long id) {
		return goalRepository.findByGridId(id);
	}
}

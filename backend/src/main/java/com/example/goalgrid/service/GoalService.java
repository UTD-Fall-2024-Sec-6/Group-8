package com.example.goalgrid.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.goalgrid.model.Goal;
import com.example.goalgrid.model.Grid;
import com.example.goalgrid.repository.GoalRepository;
import com.example.goalgrid.repository.GridRepository;

import jakarta.transaction.Transactional;

@Service
public class GoalService {
    
    @Autowired
    private GoalRepository goalRepository;
    @Autowired
    private GridRepository gridRepository;
    
	public Goal postGoal(Goal goal) {
    	Random rd = new Random();
		goal.setId(System.currentTimeMillis()+rd.nextInt(1000));
        return goalRepository.save(goal);
    }

	public List<Goal> getGoals(long gridId) {
		Grid grid = gridRepository.findById(gridId).get();
		List<Goal> goals = goalRepository.findByGridId(gridId);
		if(grid.isGenerate())
			goals.sort((goal1, goal2) -> {
		        if (goal1.getRow() != goal2.getRow()) {
		            return Integer.compare(goal1.getRow(), goal2.getRow());
		        }
		        return Integer.compare(goal1.getColumn(), goal2.getColumn());
		    });
		return goals;
	}
	@Transactional
	public List<Goal> deleteGoal(Long gridId, Long goalId) {
		goalRepository.deleteById(goalId);
		return goalRepository.findByGridId(gridId);
	}

	public void markDone(Long id) {
		Goal goal = goalRepository.findById(id).get();
		goal.setMark(true);
		goalRepository.save(goal);
	}
}

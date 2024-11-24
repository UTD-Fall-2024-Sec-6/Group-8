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
import com.example.goalgrid.repository.GridRepository;
import com.example.goalgrid.service.GoalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/goal")
@RequiredArgsConstructor
@CrossOrigin("*")
public class GoalController {

	@Autowired
	private GoalService goalService;
	@Autowired
	private GridRepository gridRepository;
	
	@PostMapping("addGoal/{gridId}")
	public ResponseEntity<List<Goal>> createGrid(
	    @RequestHeader("Authorization") String token, 
	    @PathVariable Long gridId, // Use gridId here
	    @RequestBody Goal goal
	) {
	    Grid grid = gridRepository.findById(gridId).get();
	    goal.setGrid(grid);
	    goalService.postGoal(goal);
	    List<Goal> goals = goalService.getGoals(gridId);
	    return ResponseEntity.ok(goals);
	}
	
	@GetMapping("getGoals/{gridId}")
    public ResponseEntity<List<Goal>> getGoalsFromGridID(@PathVariable Long gridId) {
		List<Goal> goals = goalService.getGoals(gridId);
        return ResponseEntity.ok(goals);
    }
	
	@PostMapping("deleteGoal/{gridId}")
    public ResponseEntity<List<Goal>> deleteGoal(@PathVariable Long gridId, @RequestBody IdWrapper id) {
		goalService.deleteGoal(gridId, id.getId());
		List<Goal> goals = goalService.getGoals(gridId);
		return ResponseEntity.ok(goals);
    }
	
	@PostMapping("markDone/{gridId}")
    public ResponseEntity<List<Goal>> markGoalDone(@PathVariable Long gridId, @RequestBody IdWrapper id) {
		goalService.markDone(id.getId());
		List<Goal> goals = goalService.getGoals(gridId);
		return ResponseEntity.ok(goals);
    }
}


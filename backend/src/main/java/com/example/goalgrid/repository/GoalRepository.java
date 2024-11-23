package com.example.goalgrid.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.goalgrid.model.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long>{
	List<Goal> findByGridId(Long gridId);
	void deleteByGridId(Long gridId);
}

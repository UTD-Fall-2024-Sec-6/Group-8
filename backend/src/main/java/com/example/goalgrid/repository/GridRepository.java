package com.example.goalgrid.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.goalgrid.model.Grid;

import java.util.List;

@Repository
public interface GridRepository extends JpaRepository<Grid, Long> {
    List<Grid> findByUserId(Long userId);
}
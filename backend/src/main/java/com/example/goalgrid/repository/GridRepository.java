package com.example.goalgrid.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.goalgrid.model.Grid;

import java.util.List;

public interface GridRepository extends JpaRepository<Grid, Long> {
    List<Grid> findByUserId(Long userId);
}
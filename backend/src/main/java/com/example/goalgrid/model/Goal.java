package com.example.goalgrid.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "goals")
public class Goal {
    @Id
    @Column(name = "goalID")
    private Long id;

    @JsonProperty("goalName")
    private String name;

    // Rename "column" to "colNumber" to avoid conflict with SQL reserved keywords
    @Column(name = "colPosition")
    private int column;

    @Column(name = "rowPosition")
    private int row;
	
	@Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean markComplete;
    
    @ManyToOne
    @JoinColumn(name = "grid_id", nullable = false)
    @JsonBackReference
    private Grid grid;
    
	public Goal() {
		// Default constructor required by Hibernate
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRow() {
		return row;
	}
	
	public void setRow(int row) {
		this.row = row;
	}

	public int getColumn() {
		return column;
	}

	public void setColumn(int column) {
		this.column = column;
	}
	
	public boolean isMarkComplete() {
		return markComplete;
	}

	public void setMark(boolean markComplete) {
		this.markComplete = markComplete;
	}
	
	public Grid getGrid() {
	        return grid;
	}

	public void setGrid(Grid grid) {
	        this.grid = grid;
	}
    
}

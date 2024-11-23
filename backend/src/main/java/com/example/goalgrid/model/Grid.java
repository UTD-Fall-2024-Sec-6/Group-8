package com.example.goalgrid.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "grids")
public class Grid {
	@Id
	@Column(name = "gridID")
    private Long id;
	@JsonProperty("gridName")
    String name;
	@JsonProperty("size")
    int size;
	
	@Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isGenerate;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;
    
    @OneToMany(mappedBy = "grid", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Goal> goals;
    
	public Grid() {
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

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public boolean isGenerate() {
		return isGenerate;
	}

	public void setGenerate(boolean isGenerate) {
		this.isGenerate = isGenerate;
	}
	
	public User getUser() {
	        return user;
	}

	public void setUser(User user) {
	        this.user = user;
	}
    
	public List<Goal> getGoals() {
        return goals;
    }

    public void setGoals(List<Goal> goals) {
        this.goals = goals;
    }
    
}

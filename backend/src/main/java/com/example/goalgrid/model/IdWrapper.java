package com.example.goalgrid.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IdWrapper {
	@JsonProperty("id")
	private Long id;

    // Getter and Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

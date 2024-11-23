package com.example.goalgrid.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SizeWrapper {
	@JsonProperty("size")
	private int size;

    // Getter and Setter
    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}

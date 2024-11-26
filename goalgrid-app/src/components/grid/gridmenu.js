import React, { useEffect, useState } from "react";
import "./grid.css";

export default function Grid({ onGenerateData }) {
  const token = localStorage.getItem("authToken");
  const [selectedGrid, setSelectedGrid] = useState(null);
  const [grids, setGrids] = useState([]);

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value); // Get the value of the input field
  };

  const handleSubmit = async (e) => {
    if (input.trim() === "") {
      setInput("");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/grid/addGrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          gridName: input,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGrids(data);
      setInput("");
      handleSelectGrid(data[data.length - 1].id);
    } catch (error) {
      console.error("Error during fetch operation:", error);
    }
  };

  const handleSelectGrid = (gridID) => {
    setSelectedGrid(gridID);
    onGenerateData(gridID);
  };

  const handleDeleteGrid = async (e) => {
    try {
      const response = await fetch("http://localhost:8080/grid/deleteGrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: selectedGrid,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGrids(data);
      handleSelectGrid(null);
    } catch (error) {
      console.error("Error during fetch operation:", error);
    }
  };

  useEffect(() => {
    const fetchGrids = async () => {
      try {
        const response = await fetch("http://localhost:8080/grid/getGrids", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGrids(data);
      } catch (error) {
        console.error("Error during fetch operation:", error);
      }
    };
    fetchGrids();
  }, [token]);
  return (
    <div className="Grid">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          width: "auto",
          borderRadius: "40px",
          fontWeight: "bold",
        }}
      >
        <h1 className="addgrid-title">Grid's List</h1>
      </div>

      {/* Input and Button */}
      <div className="addgrid-input-row">
        <input
          className="addgrid-input"
          placeholder="Enter a new grid name"
          value={input}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          onChange={handleInputChange}
        />
        <button className="addgrid-addbutton" onClick={handleSubmit}>
          Add
        </button>
      </div>

      {/* Grid List */}
      <div className="grid-list">
        {grids.length > 0 ? (
          grids.map((grid) => (
            <div
              key={grid.id}
              className={`grid-item ${
                selectedGrid === grid.id ? "selected" : ""
              }`}
              onClick={() => handleSelectGrid(grid.id)}
              style={{ position: "relative" }}
            >
              {grid.gridName}
              <button
                className="trashcan-button"
                onClick={(e) => {
                  e.stopPropagation();
                  const confirmDelete = window.confirm(
                    "Do you want to delete this grid?"
                  );
                  if (confirmDelete) {
                    handleDeleteGrid();
                  }
                }}
                style={{
                  display: selectedGrid === grid.id ? "inline" : "none",
                }}
              >
                <div className="trashcan-icon">
                  <div className="lid"></div>
                  <div className="lidcap"></div>
                  <div className="bin">
                    <div className="cut cut1"></div>
                    <div className="cut cut2"></div>
                  </div>
                </div>
              </button>
            </div>
          ))
        ) : (
          <div className="empty-grid-label">There is no grid yet.</div>
        )}
      </div>
    </div>
  );
}

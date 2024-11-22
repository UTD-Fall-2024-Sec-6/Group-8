import React, { useEffect, useState } from "react";
import "./grid.css";

export default function Grid() {
  const token = localStorage.getItem("authToken");
  const [selectedGrid, setSelectedGrid] = useState(null);
  const [grids, setGrids] = useState([]);

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value); // Get the value of the input field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error("Error during fetch operation:", error);
    }
  };

  const handleSelectGrid = (gridName) => {
    setSelectedGrid(gridName);
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
  }, []);
  return (
    <div className="Grid">
      <h1 className="addgrid-title">Grid's list</h1>

      {/* Input and Button */}
      <div className="addgrid-input-row">
        <input
          className="addgrid-input"
          placeholder="Enter a new grid name"
          value={input}
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
              className={`grid-item ${selectedGrid === grid ? "selected" : ""}`}
              onClick={() => handleSelectGrid(grid)}
            >
              {grid.gridName}
            </div>
          ))
        ) : (
          <div className="empty-grid-label">There is no grid</div>
        )}
      </div>
    </div>
  );
}

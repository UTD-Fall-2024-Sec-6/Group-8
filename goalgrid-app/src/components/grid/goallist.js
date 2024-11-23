import React, { useState, useEffect } from "react";
import "./goals.css";
export default function GoalList({ gridId }) {
  const token = localStorage.getItem("authToken");
  const [gridName, setGridName] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [goals, setGoals] = useState([]);
  const [highlightedGoals, setHighlightedGoals] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [newGoal, setNewGoal] = useState("");
  const [hoveredGoalId, setHoveredGoalId] = useState(null);

  // Fetch grid details and goals from the backend
  useEffect(() => {
    setSelectedSize(null);
    const fetchGridDetails = async () => {
      try {
        const gridResponse = await fetch(
          `http://localhost:8080/grid/getGrid/${gridId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const gridData = await gridResponse.json();
        console.log(gridData);
        setGridName(gridData.gridName);
        setIsGenerated(gridData.generate);
        setSelectedSize(gridData.size);

        const goalsResponse = await fetch(
          `http://localhost:8080/goal/getGoals/${gridId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const goalsData = await goalsResponse.json();
        setGoals(goalsData);
      } catch (error) {
        console.error("Error fetching grid details:", error);
      }
    };

    fetchGridDetails();
  }, [gridId]);

  // Add a new goal to the list
  const handleAddGoal = async () => {
    if (newGoal.trim() === "") {
      setNewGoal("");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8080/goal/addGoal/${gridId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ goalName: newGoal }),
        }
      );
      if (response.ok) {
        const goalList = await response.json();
        setGoals(goalList);
        setNewGoal("");
        setSelectedSize(null);
      }
    } catch (error) {
      console.error("Error adding goal:", error);
    }
  };

  // Handle size button click
  const handleSizeClick = (size) => {
    const count = size === 3 ? 9 : size === 4 ? 16 : 25;
    setHighlightedGoals(goals.slice(0, count));
    setSelectedSize(size);
  };

  // Submit the selected size
  const handleSubmitSize = async () => {
    if (!selectedSize) return;
    try {
      const response = await fetch(
        `http://localhost:8080/grid/generate/${gridId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ size: selectedSize }),
        }
      );
      const goalList = await response.json();
      console.log(goalList);
      setGoals(goalList);
      setIsGenerated(true); // Update state to reflect generated grid
    } catch (error) {
      console.error("Error submitting size:", error);
    }
  };

  const handleDeleteGoal = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/goal/deleteGoal/${gridId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: hoveredGoalId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGoals(data);
      setHoveredGoalId(null);
      setSelectedSize(null);
    } catch (error) {
      console.error("Error during fetch operation:", error);
    }
  };
  return (
    <div>
      <h2>{gridName}</h2>

      {isGenerated ? (
        // If grid is generated, show the list in grid layout
        <div className={`grid-${selectedSize}x${selectedSize}`}>
          {goals.map((goal) => (
            <div key={goal.id} className="goal-item">
              {goal.goalName}
            </div>
          ))}
        </div>
      ) : (
        // If grid is not generated
        <>
          {/* Input and add goal */}
          <div className="add-goal-row">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Enter a new goal"
            />
            <button onClick={handleAddGoal}>Add Goal</button>
          </div>

          {/* List of goals */}
          {goals.map((goal, index) => (
            <li
              key={goal.id}
              onMouseEnter={() => setHoveredGoalId(goal.id)}
              onMouseLeave={() => setHoveredGoalId(null)}
              className={highlightedGoals.includes(goal) ? "highlighted" : ""}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {goal.goalName}
              <button
                className="delete-button"
                onClick={handleDeleteGoal}
                style={{
                  display: hoveredGoalId === goal.id ? "inline" : "none", // Show button on hover
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                ✕
              </button>
            </li>
          ))}

          {/* Size selection buttons */}
          <div className="size-buttons">
            <button
              disabled={goals.length < 9}
              onClick={() => handleSizeClick(3)}
              className={selectedSize === 3 ? "selected" : ""}
            >
              3x3
            </button>
            <button
              disabled={goals.length < 16}
              onClick={() => handleSizeClick(4)}
              className={selectedSize === 4 ? "selected" : ""}
            >
              4x4
            </button>
            <button
              disabled={goals.length < 25}
              onClick={() => handleSizeClick(5)}
              className={selectedSize === 5 ? "selected" : ""}
            >
              5x5
            </button>
          </div>

          {/* Submit button */}
          <button onClick={handleSubmitSize} disabled={!selectedSize}>
            Generate
          </button>
        </>
      )}
    </div>
  );
}

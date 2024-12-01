import { render, screen, waitFor, act } from "@testing-library/react";
import GoalList from "./goallist";
import React from "react";

// jest.fn() creates a simulated response
global.fetch = jest.fn();

describe(GoalList, () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  //Test #1 for Generate Grid (UC#13)
  it("Goal List has ZERO goals, all grid buttons should be disabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of ZERO goals
    let testGoalList = [];
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if all buttons are disabled (since goals.length is 0)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeDisabled();
    expect(TestButton1).toBeDisabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #2 for Generate Grid (UC#13)
  it("Goal List has EIGHT goals, all grid buttons should be disabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of EIGHT goals
    let testGoalList = []
    for(let i = 0; i < 8; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if all buttons are disabled (since goals.length is 8)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeDisabled();
    expect(TestButton1).toBeDisabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #3 for Generate Grid (UC#13)
  it("Goal List has NINE goals, the 3x3 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of NINE goals
    let testGoalList = []
    for(let i = 0; i < 9; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 button is enabled (since goals.length is 9)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeDisabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #4 for Generate Grid (UC#13)
  it("Goal List has TEN goals, the 3x3 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of TEN goals
    let testGoalList = []
    for(let i = 0; i < 10; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);
    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 button is enabled (since goals.length is 10)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeDisabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #5 for Generate Grid (UC#13)
  it("Goal List has 15 goals, only 3x3 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 15 goals
    let testGoalList = []
    for(let i = 0; i < 15; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 button is enabled (since goals.length is 15)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeDisabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #6 for Generate Grid (UC#13)
  it("Goal List has 16 goals, 3x3 and 4x4 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 16 goals
    let testGoalList = []
    for(let i = 0; i < 16; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1} />);
    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 and 4x4 button is enabled (since goals.length is 16)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeEnabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #7 for Generate Grid (UC#13)
  it("Goal List has 17 goals, 3x3 and 4x4 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 17 goals
    let testGoalList = []
    for(let i = 0; i < 17; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch
    
    render(<GoalList gridId={1} />);
    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 and 4x4 button is enabled (since goals.length is 17)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeEnabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #8 for Generate Grid (UC#13)
  it("Goal List has 24 goals, 3x3 and 4x4 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 24 goals
    let testGoalList = []
    for(let i = 0; i < 24; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch
    
    render(<GoalList gridId={1} />);
    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3 and 4x4 button is enabled (since goals.length is 24)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeEnabled();
    expect(TestButton2).toBeDisabled();
  });

  //Test #9 for Generate Grid (UC#13)
  it("Goal List has 25 goals: 3x3, 4x4, and 5x5 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 25 goals
    let testGoalList = []
    for(let i = 0; i < 25; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch
    
    render(<GoalList gridId={1} />);
    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3, 4x4, 5x5 button is enabled (since goals.length is 25)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeEnabled();
    expect(TestButton2).toBeEnabled();
  });

  //Test #10 for Generate Grid (UC#13)
  it("Goal List has 26 goals: 3x3, 4x4, and 5x5 button should be enabled", async () => {
    // Test values for grid and goal list
    const testGrid = { id: 1, generate: false, gridName: "Test Grid", size: null };

    //create a list of 26 goals
    let testGoalList = []
    for(let i = 0; i < 26; i++) {
      testGoalList.push({ id: i, column: null, row: null, markComplete: false, goalName: `testGoal${i}` })
    } 
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    
    render(<GoalList gridId={1} />);

    
    await act(async () => {
      await waitFor(() => screen.getByTestId("TestBtnGrid9"));
      await waitFor(() => screen.getByTestId("TestBtnGrid16"));
      await waitFor(() => screen.getByTestId("TestBtnGrid25"));
    });

    // Check if the 3x3, 4x4, 5x5 button is enabled (since goals.length is 26)
    const TestButton = screen.getByTestId("TestBtnGrid9");
    const TestButton1 = screen.getByTestId("TestBtnGrid16");
    const TestButton2 = screen.getByTestId("TestBtnGrid25");
    expect(TestButton).toBeEnabled();
    expect(TestButton1).toBeEnabled();
    expect(TestButton2).toBeEnabled();
  });
});

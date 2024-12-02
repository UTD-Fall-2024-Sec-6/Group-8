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

  //Test #1 for Reward for Grid Completion (UC#11)
  it("When grid is not complete, no completion message displayed", async () => {
    // Test values for grid and goal list
    const testGrid = { id:1733111695529, status:0, generate:true, gridName:"TestGrid", size:3}; //STATUS = 0 means NOT COMPLETE grid.

    //create a list of NINE goals
    let testGoalList = [{id:1733111703257, column:1,row:1,markComplete:false,goalName:"8"},{id:1733111699047,column:2,row:1,markComplete:false,goalName:"3"},{id:1733111702853,column:3,row:1,markComplete:false,goalName:"7"},{id:1733111701307,column:1,row:2,markComplete:false,goalName:"6"},{id:1733111698146,column:2,row:2,markComplete:false,goalName:"1"},{id:1733111700592,column:3,row:2,markComplete:false,goalName:"5"},{id:1733111703959,column:1,row:3,markComplete:false,goalName:"9"},{id:1733111699557,column:2,row:3,markComplete:false,goalName:"4"},{id:1733111698572,column:3,row:3,markComplete:false,goalName:"2"}]
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1733111695529} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestStatus"));
    });

    const TestStatus = screen.getByTestId("TestStatus").textContent;
    expect(TestStatus).toEqual("")
  });

  //Test #2 for Reward for Grid Completion (UC#11)
  it("When grid has one row complete, show 'BINGO' completion message", async () => {
    // Test values for grid and goal list
    const testGrid = { id:1733111695529, status:1, generate:true, gridName:"TestGrid", size:3}; //STATUS = 1 means BINGO on grid.

    //create a list of NINE goals
    let testGoalList = [{id:1733111703257, column:1,row:1,markComplete:false,goalName:"8"},{id:1733111699047,column:2,row:1,markComplete:false,goalName:"3"},{id:1733111702853,column:3,row:1,markComplete:false,goalName:"7"},{id:1733111701307,column:1,row:2,markComplete:true,goalName:"6"},{id:1733111698146,column:2,row:2,markComplete:true,goalName:"1"},{id:1733111700592,column:3,row:2,markComplete:true,goalName:"5"},{id:1733111703959,column:1,row:3,markComplete:false,goalName:"9"},{id:1733111699557,column:2,row:3,markComplete:false,goalName:"4"},{id:1733111698572,column:3,row:3,markComplete:false,goalName:"2"}]
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1733111695529} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestStatus"));
    });

    const TestStatus = screen.getByTestId("TestStatus").textContent;
    expect(TestStatus).toEqual("BINGO")
  });

  //Test #3 for Reward for Grid Completion (UC#11)
  it("When grid has all goals complete, show 'BLACKOUT' completion message", async () => {
    // Test values for grid and goal list
    const testGrid = { id:1733111695529, status:2, generate:true, gridName:"TestGrid", size:3}; //STATUS = 1 means BLACKOUT on grid.

    //create a list of NINE goals
    let testGoalList = [{id:1733111703257, column:1,row:1,markComplete:true,goalName:"8"},{id:1733111699047,column:2,row:1,markComplete:true,goalName:"3"},{id:1733111702853,column:3,row:1,markComplete:true,goalName:"7"},{id:1733111701307,column:1,row:2,markComplete:true,goalName:"6"},{id:1733111698146,column:2,row:2,markComplete:true,goalName:"1"},{id:1733111700592,column:3,row:2,markComplete:true,goalName:"5"},{id:1733111703959,column:1,row:3,markComplete:true,goalName:"9"},{id:1733111699557,column:2,row:3,markComplete:true,goalName:"4"},{id:1733111698572,column:3,row:3,markComplete:true,goalName:"2"}]
    //console.log(testGoalList);

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGrid),
    }); // Simulate a Grid fetch
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(testGoalList),
    }); // Simulate a Goal List fetch

    render(<GoalList gridId={1733111695529} />);

    await act(async () => {
      await waitFor(() => screen.getByTestId("TestStatus"));
    });

    const TestStatus = screen.getByTestId("TestStatus").textContent;
    expect(TestStatus).toEqual("BLACKOUT")
  });
});

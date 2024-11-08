import React from 'react';
import { render, screen } from "@testing-library/react"
import GoalComponent from "./goalcomponent.js"
import { Goal } from '../pages/goal.js';

describe(GoalComponent, () => {
  //Test 1 for Add Goal (UC4):
  it("User passes normal description, length in the range of 1 and 25 characters (inclusive): output is same as user's input.", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(Math.random(), "This is a test", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("This is a test");
  })

  //Test 2 for Add Goal (UC4): 
  it("User passes input longer than 25 characters, goal description output is only first 25 characters", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(Math.random(), "123456789012345678901234567890", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("1234567890123456789012345");
  })
  //Test 3 for Add Goal (UC4): 
  it("User passes empty input, goal description should say 'Empty Goal'", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(Math.random(), "", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("Empty Goal");
  })

  //Test 4 for Add Goal (UC4):
  it("Goal is passed an ID < 0, desc should say 'ERROR'", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(-1, "", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("ERROR");
  })

  //Test 5 for Add Goal (UC4):
  it("Goal is passed an ID > 25, desc should say 'ERROR'", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(26, "", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("ERROR");
  })
})

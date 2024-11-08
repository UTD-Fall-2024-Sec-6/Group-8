import React from 'react';
import { render, screen } from "@testing-library/react"
import GoalComponent from "./goalcomponent"
import { Goal } from '../pages/goal.js';

describe(GoalComponent, () => {
  //Test 1 for Add Goal (UC4): 
  it("User passes empty input, goal description should say 'Empty Goal'", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(Math.random(), "", false)} completeGoal={null}/>)
    const goalDescription = screen.getByTestId("description").textContent;
    expect(goalDescription).toEqual("Empty Goal");
  })

  //Test 1 for Mark Complete (UC9)
  it("Test #1 for Mark Complete: When goal is initially false, button click, output should be true", () => {
    //Code goes here
  })

  //Test 2 for Mark Complete (UC9)
  it("Test #2 for Mark Complete: When goal is initially true, button click, output should be false", () => {
    //Code goes here
  })
})

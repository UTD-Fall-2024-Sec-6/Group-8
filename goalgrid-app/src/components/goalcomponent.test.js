import React from 'react';
import { render } from "@testing-library/react"
import GoalComponent from "./goalcomponent"

describe(GoalComponent, () => {
  it("User passes empty input, goal description should say 'Empty Goal'", () => {
    const { getByTestID } = render(<GoalComponent aGoal={new Goal(Math.random(), "", false)} completeGoal={null}/>)
    const goalDescription = getByTestID("description").textContent;
    expect(goalDescription).toEqual("Empty Goal");
  })
})

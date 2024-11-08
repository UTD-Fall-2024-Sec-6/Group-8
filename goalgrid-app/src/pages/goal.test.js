import { render, screen } from "@testing-library/react"
import { Goal } from './goal.js';

describe(Goal, () => {
  //Test 1 for Mark Complete (UC9)
  it("Test #1 for Mark Complete: When goal is initially false, button click, output should be true", () => {
    const testGoal = new Goal(Math.random(), "Test 1", false);
    testGoal.markComplete();
    expect(testGoal.isCompleted).toBe(true);
  })

  //Test 2 for Mark Complete (UC9)
  it("Test #2 for Mark Complete: When goal is initially true, button click, output should be false", () => {
    const testGoal = new Goal(Math.random(), "Test 2", true);
    testGoal.markComplete();
    expect(testGoal.isCompleted).toBe(false);
  })
})

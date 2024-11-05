/*
    Goal Class
    Allows for the creation, and editing, of goals.
*/

class goal
{
    constructor(goalID, desc, gridID,                   // Creates goal when
                isCompleted, rowPosition, colPosition)  // new instance is created.
    {
        this.goalID = goalID;
        this.desc = desc;
        this.gridID = gridID;
        this.isCompleted = isCompleted;
        this.rowPosition = rowPosition;
        this.colPosition = colPosition;
    }
    
    // Returns the goalID
    getGoal()
    {
        return this.goalID;
    }
    
    // Gives the goal a new description, no return.
    editGoal(newDesc)
    {
        this.desc = newDesc;
    }
    
    // Marks the goal complete
    markComplete()
    {
        this.isCompleted = true;
    }
}

// testing area //

goal1 = new goal(1, "hello", 2, false, 3, 4);
console.log(goal1.desc);    // should output 'hello'

goal1.editGoal("goodbye");
console.log(goal1.desc);    // should output 'goodbye'

goal1.markComplete();
console.log(goal1.isCompleted); // should output true (1)
console.log(goal1.getGoal()); // should output 1



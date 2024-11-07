/*
    Goal Class
    Allows for the creation, and editing, of goals.
*/

export class Goal
{
    constructor(goalID, desc, 
                //gridID,                  
                isCompleted, 
                //rowPosition, colPosition
            )  // Creates goal when new instance is created.
    {
        this.goalID = goalID;
        this.desc = desc;
        //this.gridID = gridID;
        this.isCompleted = isCompleted;
        //this.rowPosition = rowPosition;
        //this.colPosition = colPosition;
    }
    
    // Returns the goalID
    getGoalID()
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
        if(this.isCompleted == false) {
            this.isCompleted = true;
        }
        else {
            this.isCompleted = false;
        }
        console.log(this.desc + " is " + this.isCompleted);
    }
}

// testing area //
/*
goal1 = new Goal(1, "hello", 2, false, 3, 4);
console.log(goal1.desc);    // should output 'hello'

goal1.editGoal("goodbye");
console.log(goal1.desc);    // should output 'goodbye'

goal1.markComplete();
console.log(goal1.isCompleted); // should output true (1)
console.log(goal1.getGoal()); // should output 1
*/


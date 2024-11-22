/*
    Goal Class
    Allows for the creation, and editing, of goals.
*/

export class Goal {
  constructor(
    goalID,
    desc,
    //gridID,
    isCompleted
    //rowPosition, colPosition // Creates goal when new instance is created.
  ) {
    if (goalID < 0 || goalID > 24) {
      // checks for invalid goal ID
      this.goalID = -99;
      this.desc = "ERROR";
      this.isCompleted = false;
      return;
    }

    this.goalID = goalID;
    if (desc == "") {
      // Checks for empty string
      this.desc = "Empty Goal";
    } else {
      if (desc.length > 25) {
        // checks for string length
        this.desc = desc.substring(0, 25);
      } else {
        this.desc = desc;
      }
    }
    //this.gridID = gridID;
    this.isCompleted = isCompleted;
    //this.rowPosition = rowPosition;
    //this.colPosition = colPosition;
  }

  // Returns the goalID
  getGoalID() {
    return this.goalID;
  }

  // Returns the goal description
  getGoalDesc() {
    return this.desc;
  }

  // Gives the goal a new description, no return.
  editGoal(newDesc) {
    this.desc = newDesc;
  }

  // Marks the goal complete
  markComplete() {
    if (this.isCompleted == false) {
      this.isCompleted = true;
    } else {
      this.isCompleted = false;
    }
    console.log(this.desc + " is " + this.isCompleted);
    //return this.isCompleted
  }
}

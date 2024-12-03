# GoalGrid App

## Overview

Inspired by the classic game of Bingo, we developed **GoalGrid**, a task-oriented game designed to combine productivity with entertainment. It’s a productivity tool designed to keep users motivated, foster a sense of accomplishment, and help them effectively organize and prioritize their daily responsibilities.

Users can create and customize their tasks, which are later randomly placed into a grid format. Players are challenged to complete tasks strategically to achieve Bingo, which occurs when they complete all tasks in a horizontal or vertical line. For those who seek a greater challenge, the ultimate goal is to achieve Blackout, which requires completing every task in the grid.

## Technologies Used

### Frontend

- **React.js**: Used for its simplicity, performance, and flexibility in developing a dynamic and interactive UI.
- **Figma**: Used for design prototypes to provide a visual framework before implementation.
- **Canva**: Utilized for designing background images for the application tailored to the app's aesthetic.
- **HTML/CSS**: Used for styling and layout customization.
- **VS Code**: The primary development environment, offering robust features and seamless tool integration.

### Backend

- **Spring Boot**: A framework used for developing the backend with ease and scalability.
- **Hibernate ORM**: Used for efficient object-relational mapping (ORM), simplifying database interactions.
- **MySQL**: Used as the local database to store tasks and user data.
- **Eclipse**: Used as the primary development environment for backend development.

## Running the Application

### 1. Backend (Spring Boot)

To run the backend:

1. Open Eclipse.
2. Import the project into Eclipse.
3. Locate the GoalgridApplication class (annotated with `@SpringBootApplication`).
4. Right-click on the class and select `Run As -> Spring Boot App`.

### 2. Database (MySQL)
To run the database MySQL
1. Install MySQL.
2. (Optional) Recommended to install MySQL Workbench.
3. Add MySQL connection at Hostname: 127.0.0.1; and Port: 3306.
4. Set username to "root".
5. Create a password.
6. Go to backend/src/main/resources/application.properties and edit the password to match the one create in step 5.
7. Save the file and run backend (refer to 1. Backend (Spring Boot) section above)


### 3. Frontend (React.js)

To run the actual app:

1. Navigate to the `goalgrid` app directory in your terminal.
2. Run the following command: 'npm start'

## Future Goals

As we continue to enhance **GoalGrid**, we have identified several exciting features that will elevate the user experience, making the app even more engaging and effective.

### 1. **Progress Bar**

A **progress bar** will be added to each user's task grid to visually represent how much of their tasks they have completed. This feature aims to enhance user motivation by providing a real-time visual indicator of their progress toward completing the grid, achieving Bingo, or reaching Blackout.


### 2. **Streaks**

Introducing **streaks** will gamify the app by rewarding users for completing tasks consistently over a set period. For example, completing a task every day for a week could earn a user a "7-day streak." Streaks will help users stay committed to their goals and keep them motivated to maintain their progress.



### 3. **Gamifying with Other Users**

To enhance the social aspect of GoalGrid, we will add the ability for users to **compete** or **collaborate** with others on the same task grids. Whether it's competing to complete the grid first or collaborating on shared tasks, this feature will increase engagement and foster a sense of community.


### 4. **Sharing Grids**

To increase the sharing aspect of the app, we plan to introduce a feature that allows users to **share** their completed or active grids with others. This could be particularly useful for users who want to share their task list with a friend, colleague, or social media audience.

### 5. **Working on the Same Grid**

This feature allows multiple users to work on **the same grid**, completing tasks together or individually but contributing to the same overall goal. This is ideal for group projects, team goals, or accountability partnerships, where all users are focused on completing the same set of tasks.

## Conclusion

The future goals for **GoalGrid** aim to enhance user engagement and create a more collaborative and dynamic experience. With features like progress bars, streaks, social sharing, and multi-user collaboration, GoalGrid is evolving into not just a productivity tool, but a social and gamified experience. These enhancements will help users stay motivated, focused, and connected as they work toward their personal or team goals.

We are excited to roll out these features in future updates, and we believe they will significantly improve how users interact with the app, keeping productivity fun and rewarding.

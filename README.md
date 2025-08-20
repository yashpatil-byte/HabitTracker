# Habit Tracker

A full-stack **Habit Tracker** web application built using **Node.js, Express, MongoDB**, and **Vanilla JavaScript**. Users can add, toggle, and delete habits, with all data stored in MongoDB using **sequential IDs**.

---

## Features
- Add new habits with a frequency (e.g., daily, weekly)  
- Toggle habit completion with streak tracking  
- Delete habits  
- Automatic sequential habit IDs  
- Clean, responsive, and professional frontend  

---

## Tech Stack
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Frontend:** HTML, CSS, JavaScript  
- **Other:** Mongoose, CORS  

---

## Project Structure
# Habit Tracker

A full-stack **Habit Tracker** web application built using **Node.js, Express, MongoDB**, and **Vanilla JavaScript**. Users can add, toggle, and delete habits, with all data stored in MongoDB using **sequential IDs**.

---

## Features
- Add new habits with a frequency (e.g., daily, weekly)  
- Toggle habit completion with streak tracking  
- Delete habits  
- Automatic sequential habit IDs  
- Clean, responsive, and professional frontend  

---

## Tech Stack
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Frontend:** HTML, CSS, JavaScript  
- **Other:** Mongoose, CORS  

---

## Project Structure
├─ backend/
│ ├─ controllers/
│ │ └─ habitController.js
│ ├─ models/
│ │ ├─ habitsModel.js
│ │ └─ counterModel.js
│ ├─ routes/
│ │ └─ habitRoutes.js
│ ├─ server.js
│ └─ package.json
├─ frontend/
│ ├─ index.html
│ ├─ style.css
│ └─ script.js
└─ README.md


---

## Installation & Usage

1. **Clone the repository**
```bash
git clone https://github.com/yashpatil-byte/HabitTracker.git

## Install Backend Dependencies
cd HabitTracker/backend
npm install

3. Start MongoDB
Ensure MongoDB is running on localhost:27017.

4. Start MongoDB
Ensure MongoDB is running on localhost:27017.

5. Open the frontend
Open frontend/index.html in a browser, or use the Live Server extension in VSCode.

** A Personal Note by the owner (yashpatil-byte) **
This project uses MVC Architecture

MVC Architecture in Habit Tracker
This Habit Tracker project follows the MVC (Model-View-Controller) design pattern, which separates the application into three interconnected components to organize code, make it maintainable, and promote scalability.

Model
Represents the data layer of the application.
In this project, it is implemented using Mongoose models:
habitsModel.js defines the schema and structure of a habit stored in MongoDB.
counterModel.js handles sequential ID generation for habits.
Models interact directly with the database and handle data creation, retrieval, updates, and deletion.

View
Represents the frontend interface that the user interacts with.
Implemented using HTML, CSS, and JavaScript:
index.html is the main interface where users can add, toggle, and delete habits.
CSS makes the UI look professional and user-friendly.
JavaScript in the frontend communicates with the backend API via fetch requests.
Views display data from the model and capture user inputs, sending them to the controller.

Controller
Represents the logic layer that manages interactions between the Model and the View.
Implemented in habitController.js:
Handles GET, POST, PUT, DELETE requests from the frontend.
Performs operations on the model (like adding a new habit, toggling completion, deleting a habit).
Sends responses back to the frontend to update the UI.
Routes in habitRoutes.js map frontend requests to specific controller functions.

Flow Example:
User submits a new habit via the frontend (View).
The request is sent to the controller (addHabit function in habitController.js).
The controller creates a new habit entry in the database through the model (habitsModel.js).
The controller sends back a response to the frontend.
The frontend updates the UI with the new habit.
This separation ensures clean code, easy debugging, and allows future updates, like changing the database or frontend, without breaking the other components.

I hope this helps you a lot :D
_baby.bear.exe_


# ZeroCost Gaming
ZeroCost Gaming is a web application that allows users to browse and search for free-to-play games and MMO games. It uses the MMO Games and Free-to-Play Games Database API to fetch game information and Flask to create a RESTful API that interacts with a SQLite database to store user information.

GitHub repo for Flask API AND Database https://github.com/MHines10/ZeroCostGaming-Website-API-DB

# Technologies Used
React

Flask

SQLite

MMO Games and Free-to-Play Games Database API

# Features
User can create an account

User can login and logout

User can browse and search for free-to-play games and MMO games

User can add games to a list of favorites

User can view their list of favorite games

User can remove games from their list of favorites

# Getting Started
To get started with this project, follow these steps:

Clone the repository to your local machine using git clone https://github.com/your-username/ZeroCostGaming.git.

Install the required dependencies for the React frontend by navigating to the client directory and running npm install.

Install the required dependencies for the Flask backend by navigating to the server directory and running pip install -r requirements.txt.

Create a .env file in the server directory with the following contents:

makefile

Copy code



FLASK_APP=app.py

FLASK_ENV=development

SECRET_KEY=your-secret-key





Replace your-secret-key with a secret key of your choice.

Initialize the SQLite database by running flask init-db in the server directory.

Start the Flask backend by running flask run in the server directory.

Start the React frontend by running npm start in the client directory.

Open your web browser and navigate to http://localhost:3000 to access the application.

# API Documentation
The API provides the following endpoints:

GET /games: Returns a list of all games.

GET /games/:id: Returns a single game by ID.

POST /users: Creates a new user.

GET /users/:id: Returns a single user by ID.

PUT /users/:id: Updates a user's information.

DELETE /users/:id: Deletes a user by ID.

GET /favorites/:userId: Returns a user's list of favorite games.

POST /favorites: Adds a game to a user's list of favorite games.

DELETE /favorites/:userId/:gameId: Removes a game from a user's list of favorite games.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

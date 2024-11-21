## CRUD Project with Node, Express, and Sequelize
This is a web server project built with Node.js, Express, and Sequelize for database communication. The project also incorporates other technologies such as dotenv for environment variable management, and more.

## Project Overview 
The primary goal of this project is to allow for the following CRUD operations (Create, Read, Update, Delete) on users and recipes:

## User Management:
Users can be created, deleted, updated, and listed. Each user is associated with a role (admin, user, or editor).

## Recipe Management:
Each user has a set of recipes that they can add, modify, delete, and retrieve. The recipes belong to four different types of food.

When a GET request is made by user ID, it returns the user’s details along with their associated recipes.
The user role is also displayed in the response (admin, user, or editor).

## Features
User CRUD operations
Recipe CRUD operations associated with users
Role-based user access (admin, user, or editor)
Integration with Sequelize for ORM database management
Environment variable management using dotenv

## Installation
Clone the repository:
cd crud-project

## Run the server:
npm start
Usage
Once the server is running, you can interact with the API through the following endpoints:

POST /users - Create a new user
GET /users/:id - Get user details (including associated recipes)
PUT /users/:id - Update user details
DELETE /users/:id - Delete a user
POST /recipes - Add a new recipe
GET /recipes/:id - Get a specific recipe
PUT /recipes/:id - Update a recipe
DELETE /recipes/:id - Delete a recipe

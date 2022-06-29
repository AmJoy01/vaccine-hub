Topic Lab: Vaccine Hub
Overview
For this lab, interns will be building the backend for a Vaccine Registration platform. The purpose is to allow users to register for a vaccine with their credentials, as well as be able to login and check their appointment info.

Your job is to create a Node, Express, and PostgreSQL powered API that implements registration and login functionality. All data should be persisted to the PostgreSQL database and exposed to the user via API endpoints. The frontend is already setup to communicate with the API on port 3001, so you'll be responsible for creating the backend for this application.

Project Details
Goals
By the end of this lab you will be able to...

[ ] Creating a Node/Express API from scratch
[ ] PostgreSQL and database interactions
[ ] Using environment variables in Node and Express applications
[ ] Writing SQL scripts to initialize a database and tables with the appropriate schema
[ ] Connecting to PostgreSQL with the pg package
[ ] Implementing authentication logic using SQL queries and the bcrypt package.
[ ] Handling authentication errors elegantly
Application Features
Core Features
[ ] Users have two views: login & register
[ ] Users are prompted with an error message when attempting to log in with invalid login/password combo.
[ ] Upon logging in, users are able to schedule their first appointment or confirm an existing appointment.
[ ] The application should store user's data for appointments including: location, date, first name, last name, email, & password, and list of appointments.
[ ] When users confirm an appointment, they get a confirmation message with date, location, and brief message.
Stretch Features
[ ] Allow users to update their appointment date, location, and/or user data (email & password).
[ ] Allow users to cancel their appointment for any reason.

## Recipe Platform API
A basic firebase recipe management backend API with Authentication, Swagger Docs and Cron Jobs.

## Features
- CRUD Recipes (Firestore)
- Firebase Authentication (Writing to the database)
- Swagger API Docs (/api-docs)
- Node-Cron Planned Tasks (clean up and reports)
- routes, controllers, middleware, config

## Installation
- git clone <your-repo-url>
- cd Recipe-platform-main-project
- npm install

## Environment Setup
Create .env in project root:

NODE_ENV=development
PORT=3000
SWAGGER_SERVER_URL=http://localhost:3000/api/v1
FIREBASE_SERVICE_ACCOUNT=YOUR_JSON_SERVICE_ACCOUNT_IN_ONE_LINE

## Run the Project
npm start

Swagger Docs:

http://localhost:3000/api-docs

## Authentication (Firebase)
- Go to Firebase → Authentication → Add a user
- Use the Firebase REST API to obtain an idToken

## Add in Postman:
- Authorization: Bearer <idToken>
- Protected routes: POST, PUT, DELETE

## Main API Endpoints

# Public

- GET /api/v1/recipes
- GET /api/v1/recipes/:id

## Protected (Requires Token)

- POST /api/v1/recipes
- PUT /api/v1/recipes/:id
- DELETE /api/v1/recipes/:id



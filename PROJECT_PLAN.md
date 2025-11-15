## 📘 Project Concept
The **Recipe Platform API** is designed to help users create, share, and discover cooking recipes in a structured and user-friendly way.  
The purpose of this API is to provide a back-end system where users can store and retrieve recipes, ingredients, and reviews.  

This project was chosen because it offers a clear, easy-to-understand structure that fits perfectly with the course technologies while still being flexible enough to include a new researched feature later (such as image uploads or search functionality).  
It also provides an engaging and real-world use case that can easily be expanded into a full web or mobile application in the future.

### **Main Resources**
In addition to the **Users** resource required for authentication and authorization, the API will include the following three main resources:

| Resource       |                Description                          |                     Example Fields                    | CRUD Operations             |
|----------------|-----------------------------------------------------|-------------------------------------------------------|-----------------------------|
|  **Recipes**   | Stores recipe details created by users.             | id, title, description, steps,  categoryId, createdBy | Create, Read,Update, Delete |
|**Ingredients** | Represents the ingredients required for each recipe.| id, name, quantity, recipeId                          |Create, Read, Update, Delete |
| **Reviews**    | Contains user feedback and ratings for recipes.     | id, recipeId, userId, rating, comment, createdAt      | Create, Read, Update, Delete|

### **Planned Endpoints**

#### **Auth Routes**
- `POST /auth/signup` – Register new users  
- `POST /auth/login` – Log in existing users  

#### **Recipe Routes**
- `GET /recipes` – Retrieve all recipes  
- `POST /recipes` – Add a new recipe (authenticated users only)  
- `GET /recipes/:id` – Get a single recipe by ID  
- `PUT /recipes/:id` – Update a recipe (owner/admin only)  
- `DELETE /recipes/:id` – Delete a recipe (owner/admin only)  

#### **Ingredient Routes**
- `GET /recipes/:id/ingredients` – Get ingredients for a recipe  
- `POST /recipes/:id/ingredients` – Add ingredients to a recipe  

#### **Review Routes**
- `GET /recipes/:id/reviews` – View all reviews for a recipe  
- `POST /recipes/:id/reviews` – Add a review for a recipe  
- `DELETE /reviews/:id` – Delete a review (author/admin only)

---

### **Data Needs**
- All data will be stored in **Firebase Firestore**.  
- Authentication and role-based access will be handled using **Firebase Authentication** with **custom claims** for user roles (`user`, `admin`).  

## ⚙️ Course Content Alignment

| Component                        | Description                      | Course Alignment |
|----------------------------------|------------------------------------|-------------------|
| **Node.js, TypeScript, Express** | Server setup and routing           |  Covered          |
| **Firebase Firestore**           | Cloud NoSQL database               |  Covered          |
| **Firebase Authentication**      | User management and login          |  Covered          |
| **Role-Based Authorization**     | Custom claims for access control   |  Covered          |
| **Joi Validation**               | Request validation schemas         |  Covered          |
| **Error Handling Middleware**    | Consistent error responses         |  Covered          |
| **Swagger / OpenAPI**            | API endpoint documentation         |  Covered          |
| **Helmet.js, CORS**              | API security headers               |  Covered          |
| **Jest**                         | Unit and integration testing       |  Covered          |
| **GitHub Actions**               | Continuous testing and CI/CD       |  Covered          |
| **New Component (Outside Scope)**| Image Upload using Firebase Storage| Requires Research |

The new researched feature will allow users to upload recipe images to **Firebase Storage**, with URLs stored in Firestore.  
This addition enhances user experience and showcases the ability to integrate an external back-end service.

## GitHub Project Setup

**Repository Name:** `Recipe_Platform-API-Project-Plan`  

**Branching Strategy:**
- `main` → production-ready code  
- `dev` → stable development branch  
- `feature/<feature-name>` → individual feature branches

## 📅 Project Milestones

| Milestone                  |            Focus                  |               Deliverables                                |
|----------------------------|-----------------------------------|-----------------------------------------------------------|
| **Pre-Milestone (Week 1)** | Planning & Setup                  | Project proposal, GitHub repo & board, environment setup  |
| **Milestone 1 (Week 2)**   | Core Architecture                 | Express + Firestore + Auth setup; base routes implemented |
| **Milestone 2 (Week 3)**   | CRUD + Validation + Role Security | All main endpoints complete, tested, and documented       |
| **Sprint Demo (Week 3)**   | Presentation                      | Demo of working API and Swagger documentation             |
| **Milestone 3 (Week 4)**   | Research Component & Finalization | Implement image upload feature, finalize testing and docs |

import express from "express";
import {getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe} from "../controller/recipecontroller";
import { firebaseAuth } from "../middlewares/firebaseAuth";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: API for managing recipes
 */

/**
 * @swagger
 * /api/v1/recipes:
 *   get:
 *     summary: Get all recipes
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: A list of recipes
 */
router.get("/", getAllRecipes);
/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Recipe ID
 *     responses:
 *       200:
 *         description: Recipe details
 */
router.get("/:id", getRecipeById);
/**
 * @swagger
 * /api/v1/recipes:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               instructions:
 *                 type: string
 *     responses:
 *       201:
 *         description: Recipe created successfully
 */
router.post("/", firebaseAuth, createRecipe);
/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   put:
 *     summary: Update an existing recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Recipe updated successfully
 */
router.put("/:id",firebaseAuth, updateRecipe);
/**
 * @swagger
 * /api/v1/recipes/{id}:
 *   delete:
 *     summary: Delete a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recipe deleted successfully
 */
router.delete("/:id",firebaseAuth, deleteRecipe);

export default router;

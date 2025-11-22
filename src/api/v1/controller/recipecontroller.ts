import { Request, Response } from "express";
import {getAllRecipesRepo, getRecipeByIdRepo, createRecipeRepo, updateRecipeRepo, deleteRecipeRepo} from "../repositories/recipeRepository";

// GET all recipes
export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await getAllRecipesRepo();
    return res.json(recipes);
  } catch (error: any) {
    return res.status(500).json({ message: "Error fetching recipes", error: error.message });
  }
};

// GET recipe by ID
export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await getRecipeByIdRepo(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    return res.json(recipe);
  } catch (error: any) {
    return res.status(500).json({ message: "Error fetching recipe", error: error.message });
  }
};

// POST create a recipe
export const createRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe = await createRecipeRepo(req.body);
    return res.status(201).json(newRecipe);
  } catch (error: any) {
    return res.status(500).json({ message: "Error creating recipe", error: error.message });
  }
};

// PUT update a recipe
export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const updatedRecipe = await updateRecipeRepo(req.params.id, req.body);
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    return res.json({ message: "Recipe updated", recipe: updatedRecipe });
  } catch (error: any) {
    return res.status(500).json({ message: "Error updating recipe", error: error.message });
  }
};

// DELETE a recipe
export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const result = await deleteRecipeRepo(req.params.id);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ message: "Error deleting recipe", error: error.message });
  }
};

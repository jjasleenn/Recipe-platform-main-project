import { Request, Response } from "express";

interface Recipe {id: string; title: string;ingredients: string[]; instructions: string;
}

let recipes: Recipe[] = [
  { id: "1", title: "Pasta", ingredients: ["noodles", "sauce"], instructions: "Boil pasta and add sauce." },
  { id: "2", title: "Salad", ingredients: ["lettuce", "tomato"], instructions: "Mix ingredients." }
];

// GET all recipes
export const getAllRecipes = (req: Request, res: Response) => {
  res.json(recipes);
};

// GET a recipe by ID
export const getRecipeById = (req: Request, res: Response) => {
  const recipe = recipes.find(r => r.id === req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  res.json(recipe);
};

// POST create a recipe
export const createRecipe = (req: Request, res: Response) => {
  const newRecipe: Recipe = { id: Date.now().toString(), ...req.body };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
};

// PUT update a recipe
export const updateRecipe = (req: Request, res: Response) => {
  const index = recipes.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Recipe not found" });

  recipes[index] = { ...recipes[index], ...req.body };
  res.json({ message: "Recipe updated", recipe: recipes[index] });
};

// DELETE a recipe
export const deleteRecipe = (req: Request, res: Response) => {
  const index = recipes.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Recipe not found" });

  recipes.splice(index, 1);
  res.json({ message: "Recipe deleted" });
};

import admin from "../../../config/firebase"; 
const db = admin.firestore();
const recipeCollection = db.collection("recipes");

// GET all recipes
export const getAllRecipesRepo = async () => {
  const snapshot = await recipeCollection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// GET recipe by ID
export const getRecipeByIdRepo = async (id: string) => {
  const doc = await recipeCollection.doc(id).get();
  if (!doc.exists) return null;

  return { id: doc.id, ...doc.data() };
};

// CREATE recipe
export const createRecipeRepo = async (data: any) => {
  const docRef = await recipeCollection.add(data);
  const newDoc = await docRef.get();

  return { id: newDoc.id, ...newDoc.data() };
};

// UPDATE recipe
export const updateRecipeRepo = async (id: string, data: any) => {
  await recipeCollection.doc(id).update(data);
  const updated = await recipeCollection.doc(id).get();

  return { id: updated.id, ...updated.data() };
};

// DELETE recipe
export const deleteRecipeRepo = async (id: string) => {
  await recipeCollection.doc(id).delete();
  return { message: "Recipe deleted", id };
};

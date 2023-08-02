import express  from "express";
const router = express.Router();

import { requireSignIn,isAdmin } from "../middlewares/userMiddleware.js";
import { CreateCategoryController, deleteCategory, getAllCategories, getSingleCategory, updateCategoryController } from "../controllers/categoryController.js";
 
// Admin CRUD APIS

// CREATING CATEGORY
router.post("/create-category", requireSignIn, isAdmin, CreateCategoryController)

// UPDATING CATEGORY
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController)

// GETTING ALL CATEGORIES
router.get("/get-all-categories", getAllCategories);

// GETTING SINGLE CATEGORY
router.get("/get-single-category/:slug", getSingleCategory);

// DELETE CATEGORY
router.delete("/delete-category/:Id", deleteCategory)
export default router
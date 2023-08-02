
import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/userMiddleware.js";
import { createProduct , deleteProduct, getAllProduct , getProductPhoto , getSingleProduct, updateProduct  } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// PRODUCT APIS

// CREATING PRODUCT
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProduct );

// GETTING ALL PRODUCT
router.get("/get-all-product", getAllProduct );

// GETTING SINGLE PRODJCT USING SLUG AS REQ PARAMS
router.get("/get-single-product/:slug", getSingleProduct )

// GETTING PRODUCT PHOTO
router.get("/get-product-photo/:productId", getProductPhoto )

// DELETING PRODUCT
router.delete("/delete-product/:productId", deleteProduct)  

// UPDATING PRODUCT
router.put("/update-product/:productId", updateProduct)
export default router; 
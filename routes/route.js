
import  express  from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
const router = express.Router();

// REGISTER USER
router.post("/registerUser", registerUser);

// LOGIN USER
router.post("/loginUser",loginUser)

export default router;
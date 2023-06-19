
import  express  from "express";
import { loginUser, registerUser, testController } from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/userMiddleware.js";
const router = express.Router();

// REGISTER USER
router.post("/registerUser", registerUser);

// LOGIN USER
router.post("/loginUser",loginUser)

// test
router.get("/test", requireSignIn,isAdmin,testController)

export default router;
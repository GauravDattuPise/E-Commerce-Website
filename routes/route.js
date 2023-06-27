
import  express  from "express";
const router = express.Router();

import { forgotPassword, loginUser, registerUser, testController } from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/userMiddleware.js";


// REGISTER USER
router.post("/registerUser", registerUser);

// LOGIN USER 
router.post("/loginUser",loginUser)

// ONLY ADMIN CAN ACCESS THIS ROUTE
router.get("/test", requireSignIn,isAdmin,testController);

// PROTECTED ROUTE (CHECKING USER IS AUTHENTICATED OR NOT)
router.get("/user-auth",requireSignIn, (req,res)=>{
    res.status(200).send({ok : true});
})

// PROTECTED ROUTE (CHECKING USER IS ADMIN OR NOT)
router.get("/admin-auth", requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok : true}); 
}) 

// RESET PASSOWORD
router.post("/forgotPassword",forgotPassword);


export default router;
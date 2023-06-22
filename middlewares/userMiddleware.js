
import Jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";

// TOKEN VERIFICATION

export const requireSignIn = async (req, res, next) => {
    try {
        const tokenVerify = Jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET)
        if (!tokenVerify) {
            console.log(tokenVerify);
            return res.status(400).send({ status: false, message: "not authenticated" })
        }
        else {
            req.user = tokenVerify
            next();
        }
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

// CHECKING USER IS ADMIN OR NOT

export const isAdmin = async (req, res, next) => {
    try {
           const checkUser = await userModel.findById(req.user.userId);
           if(checkUser.role !== 1){
               return res.status(401).send({status : false, message : "unAuthenticated access"})
           }
           next();
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
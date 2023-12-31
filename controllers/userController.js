
import { userModel} from "../models/userModel.js"
import { comparingPassword, hashingPassword } from "../helpers/userHelper.js";
import jwt from "jsonwebtoken"

// USER SIGNUP
export const registerUser = async (req,res) => {
    try {
        let data = req.body;
        console.log(data)
        let {name,email,password,phone,address, answer} = data;
        
        if(!name){
            return res.status(400).send({status : false, message : "name is required"})
        }
        if(!email){
            return res.status(400).send({status : false, message : "email is required"})
        }
        if(!password){
            return res.status(400).send({status : false, message : "password is required"})
        }
        if(!phone){
            return res.status(400).send({status : false, message : "phone is required"})
        }
        if(!address){
            return res.status(400).send({status : false, message : "address is required"})
        }
        if(!answer){
            return res.status(400).send({status : false, message : "answer is required"})
        }

        // CHECK USER
        const existingUser = await userModel.findOne({email : email})
        if(existingUser){
            return res.status(200).send({status : false, message : "Already registered, Go to Login"})
        }

        // HASH PASSWORD
        data.password = await hashingPassword(password);

        // CREATE USER
        const registeredUser = await userModel.create(data);
        return res.status(201).send({status : true, message : "User registered successfully", data : registeredUser})
    } catch (error) {
        res.status(500).send({status : false,  message : error.message})
    }
}

// USER LOGIN
export const loginUser = async (req,res) => {
    try {
        let data = req.body;
        let {email, password} = data;

        if(!email || !password){
            return res.status(404).send({status : false, message : "Invalid email or password"});
        }

        // FIND USER
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({status : false, message : "Email not registered"})
        }

        // COMPARE PASSWORD
        let match = await comparingPassword(password,user.password);
        if(!match){
            return res.status(200).send({status : false, message : "Password is incorrect"})
        }

        // TOKEN CREATION
        const token = jwt.sign({userId : user._id}, process.env.TOKEN_SECRET, {expiresIn : "7d"});
        console.log(process.env.TOKEN_SECRET)
        return res.status(200).send({
            status : true,
            user : {
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address,
                role : user.role
            },
            message : "Logged In Successfully",
            token : token
        })

    } catch (error) {
        res.status(500).send({status : false,  message : error.message})  
    }
}

// TEST CONTROLLER -- ONLY ADMIN CAN ACCESS
export const testController = async (req,res) => {
    res.send("protected route");
}

// FORGOT PASSWORD API

export const forgotPassword = async (req,res) => {
    try {
        let data = req.body;
        let {email,answer,newPassword} = data
        
        if(!email){
            return res.status(400).send({status : false, message : "email is required"})
        }
        if(!answer){
            return res.status(400).send({status : false, message : "answer is required"})
        }
        if(!newPassword){
            return res.status(400).send({status : false, message : "newPassword is required"})
        }

        const findUser = await userModel.findOne({email,answer});
        if(!findUser){
            return res.status(404).send({status : false, message : "Wrong Email or Answer"});
        }
        // HASHING NEW PASSWORD
        const newHashedPassword = await hashingPassword(newPassword);

        // RESETING PASSWORD
        await userModel.findByIdAndUpdate(findUser._id, {$set : {password : newHashedPassword}});
        return res.status(200).send({status : true, message : "Password Reset Successfully."})

    } catch (error) {
        res.status(500).send({status : false, message : "Something Went Wrong"})
    }
}

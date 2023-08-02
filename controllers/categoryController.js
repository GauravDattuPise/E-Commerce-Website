
import mongoose from "mongoose";
import categoryModel from "../models/categoryModel.js";
import slugify from "slugify"

export const CreateCategoryController = async (req, res) => {

    try {
        let { name } = req.body;

        if (!name) {
            return res.status(400).send({ status: false, message: "category name is required" })
        }

        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(409).send({ status: false, message: "category is alredy eixsts" })
        }

        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        return res.status(201).send({ status: true, message: "Category Created Successfully", data: category });

    } catch (error) {
        console.log("error in response", error);
        res.status.send({ status: false, message: error.message });
    }
}

// UPDATING CATEGOYRY
export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const id = req.params.id;

        if (!name) {
            return res.status(400).send({ status: false, message: "category name is required" })
        }

        // UPDATING NAME OF CATEGORY USING OBJECT ID 
        let updatedCategory = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        return res.status(200).send({ status: true, message: "category updated Successfull", data: updatedCategory })

    } catch (error) {
        console.log("error in response", error);
        res.status(500).send({ status: false, message: error.message });
    }
}

// API FOR GETTING ALL CATEGORIES

export const getAllCategories = async (req, res) => {
    try {

        let categories = await categoryModel.find();
        return res.status(200).send({ status: true, message: "success", data: categories })

    } catch (error) {
        console.log("error in response", error);
        res.status(500).send({ status: false, message: error.message });
    }
}

// API FOR GETTING SINGLE CATEGORY

export const getSingleCategory = async (req, res) => {
    try {

        let slug = req.params.slug
        const category = await categoryModel.findOne({ slug });
        return res.status(200).send({ status: true, message: "success", data: category })

    } catch (error) {
        console.log("error in   response", error);
        res.status(500).send({ status: false, message: error.message });
    }
}

// API FOR DELETE CATEGORY

export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.Id
        await categoryModel.findByIdAndDelete(categoryId);
        return res.status(200).send({ status: true, message: "catergory deleted successfully" })
    } catch (error) {
        console.log("error in   response", error);
        res.status(500).send({ status: false, message: error.message });
    }
}
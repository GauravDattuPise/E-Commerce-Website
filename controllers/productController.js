import fs from "fs";
import productModel from "../models/productModel.js";
import slugify from "slugify";

export const createProduct = async (req, res) => {
    try {
        let { name, slug, description, price, category, quantity, shipping } = req.fields
        let { photo } = req.files

        switch (true) {
            case !name:
                return res.status(400).send({ status: false, message: "Name is required" });
            case !description:
                return res.status(400).send({ status: false, message: "description is required" });
            case !price:
                return res.status(400).send({ status: false, message: "price is required" });
            case !category:
                return res.status(400).send({ status: false, message: "category is required" });
            case !quantity:
                return res.status(400).send({ status: false, message: "quantity is required" });
            case photo && photo.size > 100000:
                return res.status(400).send({ status: false, message: "photo is required with less than 10 mb size" });
        }

        const product = new productModel({ ...req.fields, slug: slugify(name) })

        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type
        }

        const savedProduct = await product.save();
        return res.status(201).send({ status: true, message: "product created successfully", data: savedProduct })

    } catch (error) {
        res.status(500).send({ status: false, error: error.message, message: "error in create product" })
    }
}


// API FOR GETTING ALL PRODUCTS

export const getAllProduct = async (req, res) => {

    try {

        // NOT GETTING PRODUCT PHOTO BECAUSE IT IS BIG IN SIZE  
        const allProduct = await productModel.find().select("-photo").limit(10).sort({ createdAt: -1 }).populate("category")
        return res.status(200).send({ status: true, message: "Success", totalCount: allProduct.length, data: allProduct })

    } catch (error) {
        console.log(err.message);
        res.status(500).send({ status: false, error: error.message, message: "error in get all product product" })
    }
}

// API FOR GETTING SINGLE PRODUCT

export const getSingleProduct = async (req, res) => {

    try {
        // USING SLUG AS REQUESTS PARAM
        const slug = req.params.slug
        const singleProduct = await productModel.findOne({ slug: slug }).select("-photo").populate("category")
        return res.status(200).send({ status: true, message: "get single prodcut successful", data: singleProduct });

    } catch (error) {
        console.log(err.message);
        res.status(500).send({ status: false, error: error.message, message: "error in  get single product" })
    }
}

// API FOR GETTING ONLY PHOTO OF PRODUCT

export const getProductPhoto = async (req, res) => {

    try {

        const productPhoto = await productModel.findById(req.params.productId).select("photo")
        if (productPhoto.photo.data) {
            res.set("Content-type", productPhoto.photo.contentType);
            return res.status(200).send(productPhoto.photo.data)
        }

        return res.status(404).send({ status: false, message: "Product photo not found" })

    } catch (error) {
        console.log(err.message);
        res.status(500).send({ status: false, error: error.message, message: "error in getting product photo" })
    }
}

// API FOR DELETING SINGLE PRODUCT

export const deleteProduct = async (req, res) => {

    try {

        await productModel.findByIdAndDelete(req.params.productId);
        return res.status(200).send({ status: true, messsage: "product deleted successffully" });

    } catch (error) {
        console.log(err.message);
        res.status(500).send({ status: false, error: error.message, message: "error in deleting product" })
    }
}

// API FOR UPDATING PRODCT

export const updateProduct = async (req, res) => {

    try {

         const productId = req.params.productId
         console.log("product id is ", productId)
        let { name, description } = req.fields

         const updatedProduct = await productModel.findByIdAndUpdate(productId, { name : name, slug: slugify(name) }, { new: true });

         return res.status(200).send({ status: true, message: "product updated Successfully", data: updatedProduct })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ status: false, error: error.message, message: "error in updating product product" })
    }
}

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category : {
         type : String,
         required : true,
         unique : true
    },
    slug : {
        type : String,
        lowercase : true
    }
});

export default mongoose.model("Category", categorySchema);
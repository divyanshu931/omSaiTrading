const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
   name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 3,
    },
    batch: {
        type: String,
        required: true,
        maxlength: 5,
        minlength: 1,
    },
    detail: {
        type: String,
        required: true,
        maxlength: 300,
        minlength: 10,
    },
    image: {
        type: String,
        required: true,
        maxlength: 500,
        minlength: 5,
    },
    type:{
        type: Number,
        required:true,
        min:0
    },
    Range: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 5,
    },
    brand: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 5,
    },
 
    
    },

    {
        versionKey: false // remove the version 
    }
);

module.exports = mongoose.model("Categories",CategoriesSchema);
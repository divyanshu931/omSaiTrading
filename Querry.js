const mongoose = require("mongoose");

// ---------------------------------------------SCHEMA for user---------------------------------------//
    const QuerySchema = mongoose.Schema({
        name:{
            type: String,
            required: true,
            maxlength: 100,
            minlength: 3,
        },
        phonenumber:{
            type: Number,
            required: true,
            minlength:10,
            maxlength:10
        },
        email:{
            type: String,
            required: true,
            minlength:5
        },
        query:{
           type: String,
           require: true,
           minlength:6,
           maxlength: 700

        },
        date:{
            type: Date,
            default: ()=> new Date(),
        },
        
    },
        {
            versionKey: false // remove version form  object
        }
    );

    
module.exports = mongoose.model("Query", QuerySchema);
const mongoose = require("mongoose");

// ---------------------------------------------SCHEMA for user---------------------------------------//
    const customerSchema = mongoose.Schema({
        name:{
            type: String,
            required: true,
            maxlength: 30,
            minlength: 3,
        },
        email:{
            type: String,
            required: true,
            minlength:8
        },
        phone_no:{
            type: String,
            required: true,
            minlength:10,
            maxlength:10
        },
        Gst:{
            type: String,
            min:15,
            max: 15,
           
        },
        Companyname:{
            type: String,
            minlength:5
        },
        createdAt:{
            type: Date,
            default: ()=> new Date(),
        },
        
    },
        {
            versionKey: false // remove version form  object
        }
    );

    
module.exports = mongoose.model("customers", customerSchema);
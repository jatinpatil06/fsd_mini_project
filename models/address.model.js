const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema(
    {
        street : {
            type : String,
            required : true,
        },

        city : {
            type : String,
            required : true,
        },

        state : {
            type : String,
            required : true,
        },

        pin_code : {
            type : Number,
            required : true,
        },
    }
);

module.exports = AddressSchema;
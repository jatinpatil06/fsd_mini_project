const mongoose = require('mongoose');
const AddressSchema = require('./address.model.js');

const UserSchema = mongoose.Schema(
    {
        user_id :{
            type : String,
            required : true,
        },

        username : {
            type : String,
            required : [true, "Please enter your username."],
        },

        password : {
            type : String,
            required : [true, "Please enter your password."],
        },

        email : {
            type : String,
            required : [true, "Please enter your email."],
        },

        full_name : {
            type : String,
            required : [true, "Please enter your full name."],
        },

        birthdate : {
            type : String,
            required : [true, "Please enter your birthdate."],
        },

        sex : {
            type : String,
            required : true,
        },

        phone_number : {
            type : Number,
            required : [true, "Please enter your phone number."],
        },

        address : {
            type : [AddressSchema],
            required : true,
        },

        likes : {
            type : [String],
            required : true,
        },

        commented_on : {
            type : [String],
        },

        posts : {
            type : [String]
        },

        tags_followed : {
            type : [String]
        },
    },
    {
        timestamp : true
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
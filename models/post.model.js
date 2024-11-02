const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        post_id : {
            type : String,
            required : true,
        },

        user_id : {
            type : String,
            required : true,
        },

        content_image : {
            type : Image,
            required : true,
        },

        content_title : {
            type : String,
            required : true,
        },

        no_of_likes : {
            type : Number,
            required : true,
        },

        comments : {
            type : [CommentSchema],
            required : true,
        },

        tags : {
            type : [TagSchema],
            required : true,
        },
    }
);

const Post = mongoose.model("POST", PostSchema);
module.exports = Post;
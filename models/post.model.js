const mongoose = require('mongoose');

const TagSchema = mongoose.Schema(
    {
        tag_id : {
            type : String,
            required : true,
        },

        tag_name : {
            type : String,
            required : true,
        },
    }
);

const CommentSchema = mongoose.Schema(
    {
        commentID: {
            type: String,
            required: [true],
        },

        commentorID: {
            type: String,
            required: [true],
        },

        content: {
            type: String,
            required: [true, "Please enter the content."],
        },

        no_of_likes: {
            type: Number,
            required: [true],
            default: 0,
        },
    },
    {
        timestamps: true
    }
);

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
            type : Buffer,
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

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
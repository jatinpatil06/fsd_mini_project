const mongoose = require('mongoose');
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

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
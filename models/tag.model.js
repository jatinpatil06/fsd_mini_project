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

//const Tag = mongoose.model("Tag", TagSchema);
module.exports = Tag;
require("dotenv").config();
const PORT = process.env.PORT;
const CONNECT_STR = process.env.CONNECT_STR;

const express = require('express')
const app = express()
app.use(express.json());

const mongoose = require('mongoose');

//defining the routes
const commentRoute = require("./routes/comment.route.js");
app.use("/api/comments", commentRoute);
const postRoute = require("./routes/post.route.js");
app.use("/api/posts", postRoute);
const userRoute = require("./routes/user.route.js");
app.use("/api/users", userRoute);

mongoose.connect(CONNECT_STR)
    .then(() => {
        console.log('Connected!');
        app.listen(PORT, () => {
            console.log(`Server is runnning on port ${PORT}`);
            })
    })
    .catch(() => {
        console.log("Connection failed");
    });


app.get('/', (req,res) => {
    res.send("Hello from node API server");
});

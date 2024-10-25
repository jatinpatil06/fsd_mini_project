require('dotenv').config();
if (!process.env.CONNECTION_STRING || !process.env.PORT) {
    console.error("Environment variables not loaded");
    process.exit(1);
}
console.log(process.env);
const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose');

const Comment = require('./models/comment.model.js');


app.get('/', (req,res) => {
    res.send("Hello from node API server");
})

app.post('/api/comments', async (req,res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected!');
        app.listen(process.env.PORT, () => {
            console.log("Server is runnning on port 3000");
        })
    })
    .catch(() => {
        console.log("Connection failed");
    });
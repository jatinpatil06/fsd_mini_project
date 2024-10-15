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

mongoose.connect('mongodb+srv://jatinpatil287:vioJxDO1Ewto1STY@backenddb.3vwoy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
    .then(() => {
        console.log('Connected!');
        app.listen(3000, () => {
            console.log("Server is runnning on port 3000");
        })
    })
    .catch(() => {
        console.log("Connection failed");
    });
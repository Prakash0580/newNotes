const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Notes");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const router = require('./src/models');
app.use('/notes', router);

app.get('/', (req, res) => {
    res.send("Everything is ok");
    console.log("Jay shree shyam");
})


app.listen(PORT, () => {
    console.log(`Server Started at PORT:${PORT}`)
});
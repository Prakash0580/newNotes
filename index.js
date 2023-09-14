const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://PkumaR:atg6zoCXOPdhE7a2@cluster0.uwtilqf.mongodb.net/Notes").then(() => {
    console.log("connected");
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const router = require('./src/routers');
app.use('/notes', router);

app.get('/', (req, res) => {
    res.send("Welcome to NotesBackend");
    console.log("Jay shree shyam");
})


app.listen(PORT, () => {
    console.log(`Server Started at PORT:${PORT}`)
});
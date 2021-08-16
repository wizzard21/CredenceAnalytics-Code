const mongoose = require('mongoose');
const seed = require('./seed');
const Movie = require('../models/movie');
require('dotenv').config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Movie.insertMany(seed);
    console.log(seed);
}

seedDB().then(() => {
    mongoose.connection.close();
})
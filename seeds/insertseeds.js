const mongoose = require('mongoose');
const seed = require('./seed');
const Movie = require('../models/movie');

mongoose.connect('mongodb+srv://new-user:NO4fq8QoMy5QbQS7@movies.wiovw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
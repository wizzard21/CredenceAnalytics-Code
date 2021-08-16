const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/router');

mongoose.connect('mongodb+srv://new-user:NO4fq8QoMy5QbQS7@movies.wiovw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log("Serving on port 3000")
})
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    try{
        const allMovies = await Movie.find({});
        return res.send(allMovies);
    }
    catch(e){
        console.log(e.toString());
        return res.send('Error !');
    }
})

router.get('/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        return res.send(movie);
    }
    catch(e){
        console.log(e.toString());
        return res.send('Error !');
    }
})

router.put('/:id/edit', async (req, res) => {
    try{
        const m = await Movie.findByIdAndUpdate(req.params.id, { ...req.body });
        res.redirect(`/${m._id}`);
    }
    catch(e){
        console.log(e.toString());
        return res.send('Error !');
    }
})

router.delete('/:id/delete', async (req, res) => {
    try{
        await Movie.findByIdAndDelete(req.params.id);
        res.send('Movie deleted !');
    }
    catch(e){
        console.log(e.toString());
        return res.send('Error !');
    }
})

router.post('/add', async (req, res) => {
    try{
        const { name, img, summary } = req.body;
        const movie = new Movie({
            name,
            img,
            summary
        });
        await movie.save();
        res.redirect(`/${movie._id}`);
    }
    catch(e){
        console.log(e.toString());
        return res.send('Error !');
    }
})

module.exports = router;
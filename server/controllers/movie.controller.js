const Movie = require('../models/movie.model');

/*
* Controller functions to create a new movie
* @param {*} req - {name, description, casts, ... directors}
* @param {*} res - movie object
* @returns - movie created
*/


const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message: 'Successfully created a movie',
        });
    } catch (err) {
        console.log("Error: Error while creating a movie");
        return res.status(500).json({
            success: true,
            error: err,
            data: {},
            message: 'Something went wrong while creating a movie object'
        });
    }
};



module.exports = {
    createMovie
}
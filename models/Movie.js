const mongoose = require("mongoose");

// create a model for insert user in db
const Movie = mongoose.model('Movie',{
    movieId: {type:Number},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = Movie
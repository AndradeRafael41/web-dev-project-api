const Movie = require('../models/Movie');

module.exports = class MovieController {

   // function to insert a new user favorive movie
   static async NewMovie(req, res) {

      const { userId, movieId } = req.body;
      console.log(req.body)
      
      const new_movie = new Movie({
         movieId,
         userId
      })

      try {
         // verify if movie is alredy in list
         const MovieExist = await Movie.findOne({ movieId: movieId, userId: userId });

         if (MovieExist) {
            return res.status(422).json({ message: " The Movie is Already on the List  !", MovieExistent: true });
         }
         // save movie in database
         await new_movie.save()
         return res.status(201).json({ message: 'Save Movie Successful', movieExistent: false });

      } catch (error) {
         console.log(error);
         res.status(500).json({ message: " Register Error, Try Again", movieExistent: false });
      }

   }

   static async getMovies(req, res) {

      const userId = req.params.userId;

      try {
         const movies = await Movie.find({ userId: userId }).select('movieId -_id');
         const movieIds = movies.map(movie => movie.movieId);

         res.status(200).json(movieIds);
      }
      catch (error) {
         res.status(500).json({ message: 'Error when searching for movies', error: error.message });
      }
   }

   static async RemoveMovie(req, res) {

      const { userId, movieId } = req.body;

      console.log(req.body)
      try {
         // Verificar se o filme já está na lista
         const MovieExist = await Movie.findOne({ movieId: movieId, userId: userId });
     
         if (!MovieExist) {
             return res.status(422).json({ message: "The Movie is not on the List!", MovieRemoved: false });
         }
     
         // Remover o filme do banco de dados
         await Movie.deleteOne({ movieId: movieId, userId: userId });
         console.log('Movie Removed');
     
         return res.status(201).json({ message: 'Movie Removed Successful', MovieRemoved: true });
     
     } catch (error) {
         console.error('Error to remove movie:', error);
         return res.status(500).json({ message: 'Error to remove movie', error: error.message, MovieRemoved:false });
     }


   }


}





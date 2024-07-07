const router = require("express").Router();
const MovieController = require("../controllers/MovieController")
const authValidate = require('../middlewares/authValidade')

router.post("/movie_add",MovieController.NewMovie, authValidate);
router.get("/fav_movie/:userId",MovieController.getMovies, authValidate);
router.post("/movie_remove/:userId",MovieController.RemoveMovie, authValidate);
router.post("/validate", authValidate);

module.exports = router;
 
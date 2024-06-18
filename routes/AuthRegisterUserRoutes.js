const router = require("express").Router();
const AuthRegisterUserController = require("../controllers/AuthRegisterUserController");


// home route
router.get("/",AuthRegisterUserController.init);

// route for insert an user register
router.post("/auth/register/user", AuthRegisterUserController.registerUser);


module.exports = router;
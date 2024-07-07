const router = require("express").Router();
const LoginController = require("../controllers/LoginController");
const authValidate = require('../middlewares/authValidade')


router.post("/auth/login",LoginController.login);

router.post("/home", authValidate);


module.exports = router;




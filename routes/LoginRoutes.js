const router = require("express").Router();
const jwt = require("jsonwebtoken");
const LoginController = require("../controllers/LoginController");

// middleware to validade user token 
function validateToken (req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Access Denied, No Token !"});
    }

    try{
        const secret = process.env.SECRET;
        jwt.verify(token,secret);
        next()
    }catch(error){
        res.status(500).json({message:"Token Invalid!"})
    }

}

router.post("/auth/login",LoginController.login);
router.get("/user", validateToken, LoginController.testToken);

module.exports = router;




const jwt = require("jsonwebtoken");

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
        console.log(token)
        res.status(200).json({message:"Token Valid!", statusToken: true})
        next()
    }catch(error){
        res.status(500).json({message:"Token Invalid!", statusToken: false})
    }

}

module.exports = validateToken;
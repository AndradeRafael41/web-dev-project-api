const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class LoginController {

    static async login(req, res) {

        const { email, password } = req.body;

        if (!email) {
            return res.status(422).json({ message: "Email Required" });
        }

        if (!password) {
            return res.status(422).json({ message: "Password Required" });
        }

        let user = null;

        try {
            user = await User.findOne({ email: email });
            console.log(user)

        } catch (error) {
            console.error(error)
            res.send("error", error);
        }

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(401).json({ message: "Password Incorret!", success: false });
        }

        try {

            const secret = process.env.SECRET;
            const token = jwt.sign({ id: user._id }, secret);
            
            const userObj = {
                "id": user._id,
                "userName": user.userName,
                "email": user.email
            }
    
            console.log(userObj);

            res.status(200).json({ message: "Successful Authentication", token: token, success: true, user: userObj })

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "An Authentication Error Occurred" })

        }
    }

    static async testToken(req, res) {
        res.status(200).json({ message: "token ok" })
    }



}

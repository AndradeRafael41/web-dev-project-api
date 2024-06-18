const User = require("../models/User");
const bcrypt = require("bcrypt");


// provisory email validator
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

module.exports = class AuthRegisterUserController {

    // initial route method
    static async init(req, res) {
        res.send(
            { message: "Welcome to ProjectName" }
        );
        console.log(req.body);
    }

    // regiter route method
    static async registerUser(req, res) {

        console.log(req.body);

        const {
            userName,
            email,
            password,
            confirmPassword
        } = req.body;


        if (!userName) {
            return res.status(422).json({ message: "User Name is Required" });
        }

        if (!email) {
            return res.status(422).json({ message: "Email is Required" });
        }

        if (!validateEmail(email)){
            return res.status(422).json({ message: "Email Invalid" });
        }


        if (!password || password.length < 4) {
            return res.status(422).json({ message: "Password is Required  and must be longer than 4 characters" });
        }

        if (!confirmPassword) {
            return res.status(422).json({ message: "Confirm Password is Required" });
        }

        if (password != confirmPassword) {
            return res.status(422).json({ message: "Passwords Don't Match" });
        }

        const userExist = await User.findOne({ email: email});

        if (userExist) {
            return res.status(422).json({ message: "There is already an account with this email !" });
        }

        const hash = await bcrypt.genSalt(12);

        const passwordHash = await bcrypt.hash(password, hash);
        
        console.log(passwordHash);


        const user = new User({
            userName,
            email,
            password: passwordHash
        });

        try {
            await user.save()
            res.status(201).json({ message: 'Register Successful' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: " Register Error, Try Again" });
        }

    }

}
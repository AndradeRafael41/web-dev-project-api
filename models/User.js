const mongoose = require("mongoose");

// create a model for insert user in db
const User = mongoose.model('User',{
    userName: String,
    email: String,
    password: String
});

module.exports = User;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require('body-parser');  

var app = express();

app.use(cors());

app.use(bodyParser.json());

const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes");
app.use(AuthRegisterUserRoutes);

const LoginRoutes = require("./routes/LoginRoutes");
app.use(LoginRoutes);

const MovieRoutes = require("./routes/MovieRoutes")
app.use(MovieRoutes);

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Server Running in Port ${port}`)
});

require("./database/connection");
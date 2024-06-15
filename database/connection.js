const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () =>{
    
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.c2hwnz5.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`);
    
    const connection = mongoose.connection;

    //there is an error connecting to the database
    connection.on("error",()=>{
        console.error("error connecting to mongoDB");
    })

    //the connection to the database was successful
    connection.on("open",()=>{
        console.log("success connecting to mongoDB");
    });
}


connect();

module.exports = mongoose;


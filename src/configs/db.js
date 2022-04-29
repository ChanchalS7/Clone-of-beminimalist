

const mongoose = require("mongoose");

// require("dotenv").config()

// const MONGODB_URL = process.env.MONGODB_URL

const Connectdb = () =>
{
    return mongoose.connect("mongodb+srv://rahulr41180:Rahul12345@cluster0.jjbeq.mongodb.net/MongodbLoginSignUpDatabase?retryWrites=true&w=majority")
    // return mongoose.connect(MONGODB_URL);
};

module.exports = Connectdb;
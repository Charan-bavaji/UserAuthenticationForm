const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// config
dotenv.config({ path: "backend/database/dont.env" });

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Defining the User schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resettoken: String,
    resetexpiry: String
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = async function (entredPassword) {
    return await bcrypt.compare(entredPassword, this.password);
};

// Creating  JWT TOKEN for current object user 
UserSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
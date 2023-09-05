const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Defining the User schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String
});
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
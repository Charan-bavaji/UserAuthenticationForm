const UserModel = require('../database/config.js');
const sendTockens = require('../utils/JwtTokens.js');


const home = async (req, res) => {
    // try {
    //     const users = await UserModel.find({});
    //     res.json(users);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ error: 'Internal server error' });
    // }
};

const signup = async (req, res) => {

    const { name, email, password, } = req.body;

    if (!name || !email || !password) {
        res.status(401).json({ msg: "fields cannot be empty" })
    } else {

        try {
            // Check if the email is already in use
            const existingUser = await UserModel.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            // Create a new user
            const user = await UserModel.create({
                name,
                email,
                password,
            });
            sendTockens(user, 201, res);

        } catch (error) {
            console.error('Error during signup:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(401).json({ msg: "Enter email or password" });
    } else {
        try {
            const user = await UserModel.findOne({ email }).select("+password");
            if (!user) {
                res.status(401).json({ msg: "Invalied email or password" })
            }
            const isPasswordMatched = await user.comparePassword(password);
            if (!isPasswordMatched) {
                return next(new ErrorHander("Invalied email or password", 401));
            }
            sendTockens(user, 201, res);
            
        } catch (error) {
            res.status(401).json({ msg: error })
        }
    }
};

// Log Out

const logout = (req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        msg:"Logged Out",
    });
}

module.exports = {
    home,
    signup,
    login,
    logout
}

const UserModel = require('../database/config.js');
const sendTockens = require('../utils/JwtTokens.js');
const sendEmail = require('../utils/sendEmail.js');
const crypto = require("crypto");
const home = async (req, res) => {

};

const signup = async (req, res) => {
    const { name, email, password, } = req.body;

    if (!name || !email || !password) {
        res.status(401).json({ message: "Fields cannot be empty" })
    } else {
        try {
            const existingUser = await UserModel.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
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
        res.status(401).json({ message: "Fields cannot be empty" });
    } else {
        try {
            const user = await UserModel.findOne({ email }).select("+password");
            if (!user) {
                return res.status(401).json({ message: "Invalied email or password" })
            }
            const isPasswordMatched = await user.comparePassword(password);
            if (!isPasswordMatched) {
                return res.status(401).json({ message: "Invalied email or password" })
            }
            sendTockens(user, 201, res);

        } catch (error) {
            return res.status(500).json({ message: "internal server error" });
        }
    }
};

// Log Out

const logout = (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
}

// forgotPasword

const forgotPasword = async (req, res, next) => {
    const { email } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({
        email
    });
    if (!user) {
        return res.json({ message: "Plaease enter valid email" });
    }
    //  Get ResetPassword Token

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/resetpassword/${resetToken}`;
    // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
    console.log(resetPasswordUrl);
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Authentication`,
            message,
        });

        return res.status(201).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resettoken = undefined;
        user.resetexpiry = undefined;
        console.log(user.resettoken);
        await user.save({ validateBeforeSave: false });
        return res.status(401).json({ message: error });
    }
}

const resetPassword = async (req, res, next) => {
    try {
        const resettoken = crypto.createHash("sha256").update(req.params.token).digest("hex");
        console.log(req.params.token, "i am token");

        const user = await UserModel.findOne({
            resettoken,
            resetexpiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Reset Password Token is invalid or has been expird" })
        }
        if (req.body.password !== req.body.conformPassword) {
            return res.status(400).json({ message: "Password does not match" })
        }
        user.password = req.body.password;
        user.resettoken = undefined;
        user.resetexpiry = undefined;

        await user.save();
        sendTockens(user, 200, res);
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    home,
    signup,
    login,
    logout,
    forgotPasword,
    resetPassword
}

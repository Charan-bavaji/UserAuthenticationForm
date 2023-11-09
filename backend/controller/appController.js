const UserModel = require('../database/config.js');
const { sendTockens } = require('../utils/JwtTokens.js');
const resetPassTockens = require('../utils/JwtTokens.js');
const sendEmail = require('../utils/sendEmail.js');
const crypto = require("crypto");
const home = async (req, res) => {

};

const signup = async (req, res) => {
    const { name, email, password, } = req.body;

    if (!name || !email || !password) {
        return res.status(401).json({ message: "Fields cannot be empty" })
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
        return res.status(401).json({ message: "Fields cannot be empty" });
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
            return sendTockens(user, 201, res);

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
    return res.status(200).json({
        success: true,
        message: "Logged Out",
    });
}

// forgotPasword

const forgotPasword = async (req, res, next) => {
    const { email } = req.body;
    const user = await UserModel.findOne({
        email
    });
    if (!user) {
        return res.status(400).json({ message: "Plaease enter valid email" });
    }
    //  Get ResetPassword Token

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    // ${req.get("host")}
    const resetPasswordUrl = `${req.protocol}://localhost:3000/api/resetpassword/${resetToken}`;
    console.log(resetToken, "forgotT");
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Password Reset`,
            message,
        });

        return res.status(201).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });


    } catch (error) {
        // user.resettoken = undefined;
        // user.resetexpiry = undefined;
        // await user.save({ validateBeforeSave: false });
        return res.status(401).json({ message: error });
    }
}

const resetPassword = async (req, res, next) => {
    const { password, conformPassword } = req.body;

    // Check if password and conformPassword match
    if (password !== conformPassword) {
        return res.status(400).json({ message: "Password does not match" });
    }
    try {
        const resetToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
        console.log(resetToken, "resetT");
        const user = await UserModel.findOne({
            resettoken: resetToken,
            resetexpiry: { $gt: Date.now() },

        });

        if (!user) {
            return res.status(400).json({ message: "Reset Password Token is invalid or has been expird" });
        }
        user.password = password;
        user.resettoken = undefined;
        user.resetexpiry = undefined;
        await user.save({ validateBeforeSave: false });
        resetPassTockens(user, 200, res);
    }
    catch (err) {
        console.log(err, "caught error");
        return res.status(500).json({ message: "Internal server error" });
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

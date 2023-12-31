const router = require("express").Router();
const { home, signup, login, logout, forgotPasword, resetPassword } = require("../controller/appController.js");
// const { products, addProducts } = require("../controller/productCountroller.js");
const { isAuthenticatedUser } = require('../middleware/auth.js')
// HTTP Request
router.get('/', home);
router.post('/user/signup', signup);
router.post('/user/login', login);
router.get("/logout", logout);
router.post("/forgetpassword", forgotPasword);
router.put("/resetpassword/:token", resetPassword);
// router.post("/addProducts", addProducts);
// router.get("/products", products);
module.exports = router;

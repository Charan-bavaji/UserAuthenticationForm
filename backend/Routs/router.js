const router = require("express").Router();
const { home, signup, login, logout } = require("../controller/appController.js");
const { products, addProducts } = require("../controller/productCountroller.js");
const { isAuthenticatedUser } = require('../middleware/auth.js')
// HTTP Request
router.get('/', home);
router.post('/user/signup', signup);
router.post('/user/login', login);
router.get("/logout", logout);
router.post("/addProducts", addProducts);
router.get("/products", isAuthenticatedUser, products);

module.exports = router;
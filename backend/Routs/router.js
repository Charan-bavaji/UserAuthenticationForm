const router = require("express").Router();
const { home, signup,login, bill } = require("../controller/appController.js");
// HTTP Request
router.post('/home', home);
router.get('/user/bill', bill);
router.post('/user/signup', signup);
router.post('/user/login',login);





module.exports = router;
const router = require("express").Router();
const { home, signup,login} = require("../controller/appController.js");
// HTTP Request
router.get('/', home);
router.post('/user/signup', signup);
router.post('/user/login',login);


module.exports = router;
const router = require("express").Router();
const { registerUser, signIn } = require("../controllers/userController");

router.post("/register", registerUser);
router.post('/login', signIn)

module.exports = router;
 
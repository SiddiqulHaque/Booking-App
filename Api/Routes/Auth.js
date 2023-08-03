const { Register, Login } = require("../Controller/Authcontroller");

const router = require("express").Router();
router.post("/register", Register);
router.post("/login",Login);
module.exports = router;

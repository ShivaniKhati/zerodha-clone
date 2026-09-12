const express = require("express");
const { signup, login } = require("../controllers/AuthController");

const router = express.Router();

router.post("/signup", signup); //signup
router.post("/login", login);  //login


module.exports = router;
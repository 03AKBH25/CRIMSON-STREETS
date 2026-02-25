const express = require("express")
const router = express.Router();
const {registerUser, loginUser } = require("../controllers/authController");
const { googleLogin } = require("../controllers/authController");
const { body } = require("express-validator")
const validate = require('../middleware/validateMiddleware')

router.post("/register",
    [
        body("name").notEmpty().withMessage("Name is required")
        .isLength({min:3}).withMessage("Name must be at least 3 characters."),

        body("email")
        .isEmail().withMessage("Valid email is required"),

        body("password")
        .isLength({min:8}).withMessage("Password must be atleast 8 characters.")
    ] ,
    validate, registerUser);

router.post("/login",
    [
        body("email").isEmail().withMessage("Valid email required"),
        body("password").notEmpty().withMessage("Password required")
    ],
    validate, loginUser);

router.post("/google", googleLogin);

module.exports = router;
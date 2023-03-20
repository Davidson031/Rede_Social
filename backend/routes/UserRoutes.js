const express = require("express");

const router = express.Router();


const { register, login, getCurrentUser } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidations } = require("../middlewares/userValidations");
const authGuard = require ("../middlewares/authGuard");

//rotas
router.get("/profile", authGuard, getCurrentUser);
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidations(), validate, login);


module.exports = router;


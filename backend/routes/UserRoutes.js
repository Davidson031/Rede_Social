const express = require("express");

const router = express.Router();


const { register, login } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidations } = require("../middlewares/userValidations");

//rotas
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidations(), validate, login);


module.exports = router;


const express = require("express");

const router = express.Router();


const { register } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidations");

//rotas
router.post("/register", userCreateValidation(), validate, register);



module.exports = router;


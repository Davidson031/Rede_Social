const express = require("express");

const router = express.Router();


const { register } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");


//rotas
router.post("/register", validate, register);



module.exports = router;


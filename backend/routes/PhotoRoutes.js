const express = require("express");
const router = express.Router();

//funcoes do controller


//middlewares
const { photoInsertValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
//rotas




module.exports = router;
const express = require("express");
const router = express.Router();

//funcoes do controller
const { insertPhoto } = require("../controllers/PhotoController");

//middlewares
const { photoInsertValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

//rotas
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
// router.post("/", () => { 
//     console.log("dsadasdadasdsad")
// })



module.exports = router;
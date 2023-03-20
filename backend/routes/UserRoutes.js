const express = require("express");

const router = express.Router();


const { register, login, getCurrentUser, update, getUserById } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidations, userUpdateValidations } = require("../middlewares/userValidations");
const authGuard = require ("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUpload");

//rotas
router.get("/profile", authGuard, getCurrentUser);
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidations(), validate, login);
router.put("/", authGuard, userUpdateValidations(), validate, imageUpload.single("profileImage"), update);
router.get("/:id", getUserById)


module.exports = router;


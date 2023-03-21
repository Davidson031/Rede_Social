const express = require("express");
const router = express.Router();

//funcoes do controller
const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto } = require("../controllers/PhotoController");

//middlewares
const { photoInsertValidation, photoUpdateValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

//rotas
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.get("/:id", getPhotoById);



module.exports = router;
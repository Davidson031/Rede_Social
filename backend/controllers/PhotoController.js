const mongoose = require("mongoose");

//model
const Photo = require("../models/Photo");
const User = require("../models/User");

//features
const insertPhoto = async (req, res) => {

    const title = req.body.title;
    const image = req.file.filename;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    });

    if (!newPhoto) {
        res.status(422).json({ errors: ["Houve um problema"] });
        return;
    }


    res.status(201).json({ newPhoto })
}

const deletePhoto = async (req, res) => {

    const { id } = req.params;

    const reqUser = req.user;

    try {
        const photo = await Photo.findById(id);

        if (!photo) {
            res.status(404).json({ errors: ["Foto não encontrada"] });
            return;
        }

        //see if photo belongs to auth user
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Ocorreu um erro"] });
        }

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json({ id: photo._id, message: "Foto deletada com sucesso." })
    } catch (error) {
        res.status(404).json({ errors: ["Foto não encontrada"] });
        return;
    }


}

const getAllPhotos = async (req, res) => {

    try {
        const photos = await Photo.find({}).exec();

        res.status(200).json({ photos })
        return;
    } catch (error) {
        res.statius(404).json({ message: "Não foi possível carregar as fotos!" })
        return;
    }


}

const getUserPhotos = async (req, res) => { 

    const { id } = req.params;

    const photos = await Photo.find({userId: id}).sort([['createdAt', -1]]).exec();

    return res.status(200).json({ photos });

}


module.exports = { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos }


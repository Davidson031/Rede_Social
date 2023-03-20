const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
require("../config/db.js");



//gerar token
const generateToken = (id) => { 
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    });
}

getCurrentUser = async (req, res) => {

    const user = req.user;

    res.status(200).json({ user });
    
}


//register user (and sign-in afterwards)
const register = async (req, res) => {


    const { name, email, password } = req.body;

    //see if user exists
    const user = await User.findOne( { email });

    if(user){
        res.status(422).json({ errors: "Por favor, utilize outro e-mail" });
        return;
    } 

    //generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);


    //criar user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })


    //check if user was created and return token if so
    if(!newUser){
        res.status(422).json({ errors: ["Houve um erro, favor tente mais tarde "]});
        return;
    };

    res.status(201).json({
        id: newUser._id,
        token: generateToken(newUser._id)
    })
}

const login = async (req, res) => { 

    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user){
        res.status(404).json({ errors: ["User não encontrado!"]});
        return;
    }

    if(!(await bcrypt.compare(password, user.password))){
        res.status(422).json({errors: ["Senha inválida!"]});
        return;
    }

    //return users with token
    res.status(201).json({
        id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })

}


module.exports = { 
    generateToken,
    register,
    login,
    getCurrentUser
}
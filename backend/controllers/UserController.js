const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;



//gerar token
const generateToken = (id) => { 
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    });
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
    const passwordSalt = await bcrypt.hash(password, salt);


    //criar user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })


    //check if user was created and return token if so
    if(!newUser){
        res.status(422).json({ errors: "Houve um erro, favor tente mais tarde "});
        return;
    };

    res.status(201).json({
        id: newUser._id,
        token: generateToken(newUser._id)
    })
}


module.exports = { 
    generateToken,
    register
}
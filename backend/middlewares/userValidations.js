const { validationResult } = require("express-validator");
const { body } = require("express-validator");



const userCreateValidation = () => {

    return [
        body("name").isString().withMessage("O nome é obrigatório").isLength({min: 3}).withMessage("O nome precisa ter 3 caracteres ou mais!"),
        body("email").isString().withMessage("E email é obrigatório").isEmail().withMessage("Insira um e-mail válido"),
        body("password").isString().withMessage("A senha é obrigatória").isLength({min: 5}).withMessage("A senha precisa ter 5 caracteres ou mais!"),
        body("confirmpassword").isString().withMessage("A confirmação de senha é obrigatória").custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("As senhas não batem!")
            }
            return true;
        })
    
    
    ];
}


module.exports = { userCreateValidation }
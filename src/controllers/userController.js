
import bcrypt from 'bcrypt'
import { v4 as uuidv4} from 'uuid';
import userModel from '../models/userModel.js'
import { createToken } from '../middlewares/auth.js';

const saltRounds = 10

//Algoritmo para encryptar password

const registerUserController = async (req,res) => {
    //Desestructurando el password para que no se muestre como tal si no hasheado
    const{password, ...otherDatauser} = req.body // Para poder hashear el password con operador de propagacion
    const hasheadPassword = await bcrypt.hash(password,saltRounds) //es una promesa
   
    //Datos del usuario establecidos en un objeto
    //Creacion del usuario
    const userData = {
        id: uuidv4(),
        password:hasheadPassword,
        ...otherDatauser
    }

    try{
        const user = await userModel.registerUserModel(userData)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json(error)
    }
}


const loginUserController = async (req, res) => {
    //destructuracion
    const {username, password} = req.body
    try{
        const user = await userModel.loginUserModel(username, password)
        delete user.password

        //para enviar el token al cleinte
        const token = createToken(user)

        res.status(200).json({user,token})
    }catch(error){
        res.status(500).json(error)
    }
}


export{
    registerUserController,
    loginUserController
}
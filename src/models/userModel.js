import bcrypt from 'bcrypt'
import { Router } from 'express'

const userModel = {
    async registerUserModel(newUser){
        //1.Conexion a la BDD
        const url = "http://localhost:4000/users"

        //2.Enviar datos
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{"Content-Type":"application/json"}
        })

        //3.Obtener respuesta
        const data = await peticion.json()
        
        //4.Mandar la respuesta al controldor
        return data
    }
    ,

    async loginUserModel(username, password){

        const url = "http://localhost:4000/users"

        const response = await fetch(url)

        const users = await response.json()

        //Comprobacion de que el ususario inica sesion con el usuario y password
        const user = users.find(user => user.username === username)
        if(!user){
            return {error:"Username o passwors erroneos"}
        }

        //Comprobacion de contraseña ingresada y encontrada en la bdd
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(user && passwordMatch){
            return user
        }else{
            return {error:"Username o password erroneos"}
        }
    }
}
export default userModel
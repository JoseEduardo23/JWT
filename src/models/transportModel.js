//Metodo que permite obtener los tours e la base de datos.


//Obtener los modelos

//1. MODELO
const transportModel = {
    async getALLtransportModel() {
        try {
            const peticion = await fetch('http://localhost:4000/transport')
            const transport = await peticion.json()
            return transport
        } catch (error) {
            console.log(error)
        }
    }


    ,

    //CREAR
    async createtransportModel(newModel){
        //1.Conexion a la BDD
        const url = "http://localhost:4000/transport"

        //2.Enviar datos
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newModel),
            headers:{"Content-Type":"application/json"}
        })
        
        //3.Obtener respuesta
        const data = await peticion.json()

        //4.Manda respuesta al controlador
        return data
    }

    ,

    //UPDATE
    async updatetransportModel(transportid, updatedtransport){
        //1.Conexion a la BDD
        const url = `http://localhost:4000/transport/${transportid}`
        //2.Enviar datos
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedtransport), //esto se modifica
            headers:{"Content-Type":"application/json"}
        })
        //3.Obtener respuesta
        const data = await peticion.json()

        //4.Manda respuesta al controlador
        return data
    }


    ,


    //DELETE
    async deletetransportModel(transportid){
            //1.Conexion a la BDD
            const url = `http://localhost:4000/transport/${transportid}`
            //2.Enviar datos
            const peticion = await fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
            })
            //3.Obtener respuesta
            const data = await peticion.json()
        
            //4.Manda respuesta al controlador
            return data
    }

    ,


    //Buscar un tour o info de uno en particular
      //Leer
      async getonetransportModel(transportid){
        //1.Conexion a la BDD
        const url = `http://localhost:4000/transport/${transportid}`
        //2.Enviar datos
        const peticion = await fetch(url,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
        })
        //3.Obtener respuesta
        const data = await peticion.json()
    
        //4.Manda respuesta al controlador
        return data
} 


}



//Exporta una sola cosa en este caso un ejemplo
export default transportModel
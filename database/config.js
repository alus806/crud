// conexión a la bbdd

const mongoose=require('mongoose');


const DBConecction=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('conectado a la bbdd')
    } catch (error) {
        console.log(error)
        return{
            ok:false,
            msg:'error al conectar con la bbdd'
        }
    }
}

module.exports={
    DBConecction
}
const Servicio= require("../models/ServicioModel")

//leer todos los servicios
const leerServicios=(req, res)=>{

    Servicio.find((error, servicios)=>{
        if(error){
            return res.json({
                ok:false,
                msg: "error al leer los servicios"
            })
        }else{
            console.log(servicios)
            res.render('back/servicios',{
                servicios
            })
        }

    })



    res.render('back/editarServicio')
    // res.json({
    //     ok:true,
    //     msg:'leyendo todos los servicios'
    // })
}

//vista formulario crear nuevo: cuando tengamos esos datos se pasarán al siguiente
const vistaCrearServicio=(req, res)=>{
    res.render('back/nuevoServicio')
    // res.json({
    //     ok:true,
    //     msg:'leyendo todos los servicios'
    // })
}

//crear nuevo: esta es la encargada de enviarlo a bbdd
const nuevoServicio=(req, res)=>{

    const {nombre,comentario}=req.body

    const servicio=new Servicio({
        nombre,
        comentario
    })

    servicio.save((error,servicio)=>{
        if(error){
            res.json({
                ok:false,
                msg:"error"
            })
        }
        res.redirect('/servicios')


    })

}

//vista formulario editar
const vistaEditarServicio=(req, res)=>{
    const {id}=req.params
    //buscar que es el params, nos devuleve un objeto, por eso lo desestructuramos

    //nos vamos a buscar en la bbdd el servicio que corresponda con el id que nos pasan por la url

    //como devuelve una promesa, utilizamos una función cb, pero tbn podemos utilizar un try catch o awit
    Servicio.findOne({__id:id},()=>{
        if(error){
            res.json({
                ok:false,
                msg:"error"
            })
        }else{
            res.render('back/editarServicio')
        }

    })
    
    // res.json({
    //     ok:true,
    //     msg:'leyendo todos los servicios'
    // })
}

//editar servicio
const editarServicio=(req, res)=>{

    const {id, nombre, comentario}=req.body
    Servicio.findByIdAndUpdate(id,{nombre, comentario},(error, servicio)=>{
        if(error){
            res.json({
                ok:true,
                msg:'servicio editado'
            })
        }

        res.redirect('back/servicio') //redirigimos a servicios una vez editado
    })

}

//eliminar servicio
const eliminarServicio=(req, res)=>{
    const {id}=req.params
    Servicio.findByIdAndRemove(id, (error, servicio)=>{
        if(error){
            res.json({
                ok:false,
                msg:'Error al eliminar el servicio'
            })
        }

        res.redirect('back/servicios') //redirigimos a servicios una vez editado
    })
}

//leer un servicio: lo pnemos aquí abajo porque no recibe argumento y se ejcuta siempre el primero
const leerUnServicio=(req, res)=>{
    const id=req.params.id

    Servicio.findOne({_id:id},(error, servicio)=>{
        if(error){
            res.json({
                ok:true,
                msg:'Error al leer el servicio'
            })
        }else{
            res.render('back/servicio')
        }
    })
        
}

module.exports={
    leerServicios,
    leerUnServicio,
    editarServicio,
    vistaEditarServicio,
    eliminarServicio,
    vistaCrearServicio,
    nuevoServicio
}
//exportamos las funciones que hemos creado








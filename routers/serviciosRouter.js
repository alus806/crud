// importamos express
const express=require('express');
const router=express.Router();
const {leerServicios,vistaCrearServicio,leerUnServicio,editarServicio,vistaEditarServicio,eliminarServicio,nuevoServicio}=require('../controllers/serviciosController')
//leer todos los servicios

router.get('/',leerServicios)

//vista formulario crear nuevo: cuando tengamos esos datos se pasarán al siguiente
router.get('/nuevo',vistaCrearServicio)

//crear nuevo: esta es la encargada de enviarlo a bbdd
router.post('/nuevo',nuevoServicio )


//vista formulario editar
router.get('/editar',vistaEditarServicio)

//editar servicio
router.post('/editar/:id',editarServicio )

//eliminar servicio
router.get('/eliminar/:id',eliminarServicio )

//leer un servicio: lo pnemos aquí abajo porque no recibe argumento y se ejcuta siempre el primero
router.get('/:id',leerUnServicio)

//siempre que hagamos las rutas hay que exportarlas, asíq eu deberiamos escribrilo lo primero así no se nos olvida
module.exports=router;
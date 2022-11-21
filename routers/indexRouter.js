// importamos express
const express=require('express');
const router=express.Router();

//leer el index
router.get('/',(req, res)=>{
    res.render('back/index')
})














//siempre que hagamos las rutas hay que exportarlas, asíq eu deberiamos escribrilo lo primero así no se nos olvida
module.exports=router;
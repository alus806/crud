const express=require('express')
require('dotenv').config() //hay que hacerlo antes de solicitar una vairbale de ntorno porque sino no nos va a funcionar
const {DBConecction}=require('./database/config')

/*configurar express*/
const app=express(); //aquí tenemos el servidor
const port=process.env.PORT;
//le decimos que coja la variable de entorno que sea port (fichero env)

/*conectar a l abase de datos */
DBConecction()

//parse application/x-www-form-urlcoded
app.use(express.urlencoded({extended:false}))

//parse application/json
app.use(express.json())

/*configurar static(publica), especificamos cual es*/
app.use(express.static(__dirname+'/public'))
//__dirname nos da la ruta completa hasta el archivo app.js , es decir, donde estams

/*configurar template engines*/
app.set('views',__dirname+'/views') //diciendo cual es la carpeta de views
app.set('view engine', 'ejs') //aquí le decimo sel tipo de ingenería que vamos a utilizar

/*routers*/
//para ver solamente si está funcionando, a casco porro
// app.get('/',(req, res)=>{
//     res.render('back/index')

// })
// app.get('/servicios',(req, res)=>{
//     res.render('back/servicios')

// })
// app.get('/productos',(req, res)=>{
//     res.render('back/productos')

// })

app.use('/',require('./routers/indexRouter'))
app.use('/servicios',require('./routers/serviciosRouter'))

/*esta ruta siempre se va a mantener aquí , la del 404, es importante tenerlo como última ruta, porque
se va a ejecutar si o si, si no entra en ninguna de las rutas entonces se va a ejecuatr el 404
es decir, que si metemos cualquier otra cosa que no existe, pues entocnes no s lleva al 404*/
app.use((req, res)=>{
    res.status(404).render('back/404',{
        error:'404',
        msg:'Página no encontrada'
    })
})

/*poner express a la escucha*/
app.listen(port, ()=>{
    console.log(`Express a la escucha del puerto ${port}`)
})
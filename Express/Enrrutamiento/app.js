
const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
 
//Enrutamiento de nuestra pagina
 
app.get('/', (req, res) =>{
    //Metodo para enviar como respuesta al enlace / un archivo html
    res.sendFile(__dirname + '/index.html')
})
 
app.get('/home', (req, res) =>{
    res.send('¡Bienvenido! Estas en la pagina de inicio :)')
})
 
app.get('/inicioSesion', (req, res) => {
    res.sendFile(__dirname+'/inicioSesion.html')
})
 
//Para manejar rutas no definidas utilizamos el comodin *
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/error.html')
})
 
app.post('/bienvenido', (req, res) =>{
    const usuario = req.body.usser
    const contrasena = req.body.password
    res.send(`Gracias por iniciar sesión ${usuario} y tu contraseña es ${contra}`)
})

app.listen(3000, () => {
    console.log(`Se inicio la app en http://localhost:3000/home`)
})
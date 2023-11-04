const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    //El metodo status define el estado HTTP de la respuesta del servidor al cliente
    //Los estados 200 son respuestas satisfactorias
    res.status(200).send('Pagina de inicio mostrada exitosamente')
})

app.get('/registro', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.post('/registro-exitoso', (req, res) => {
    const nombre = req.body.name
    const apellido = req.body.lastname
    const correo = req.body.email
    res.status(200).send(`Hola, ${nombre} ${apellido}! Te registraste en nuestra app con el correo ${correo} `)
})

app.get('/error', (req, res) =>{
    //El estado 500 son errores internos en el servidor (programción que no esta funcionando)
    res.status(500).send('Error interno en el servidor. Intentelo más tarde')
})

app.get('*', (req, res) =>{
    //El 404 es que no encontró algun recurso
    res.status(404).send('Pagina no encontrada :(')
})

app.listen(3000, () =>{
    console.log('El servidor se esta ejecutando en http://localhost:3000')
})
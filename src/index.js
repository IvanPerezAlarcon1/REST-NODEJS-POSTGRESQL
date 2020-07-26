const express = require('express'); //permite iniciar el servidor
const app = express();

//middlewares
app.use(express.json());//cada vez que desde una app cliente, envíen al servidor un dato en formato json, el servidor es capaz de entenderlo y convertirlo a objeto javascript
app.use(express.urlencoded({extended: false}));//también debe poder entender datos que vienen desde formularios, permite procesar datos de un formulario y convertirlo a objeto javascript
//el extended:false es para indicar que solo se admiten datos simples, no imagenes

//routes
app.use(require('./routes/index'));

app.listen(4000);//que el servidor guardado en app, escuche en el puerto 3000
console.log('Server on port 4000');//una vez inicia el servidor muestra mensaje por consola

const express = require('express');
const morgan = require('morgan');

const app = express();

// enviroment variables
// definimos una variable para el puerto en el cual escuchara el servidor
// process.env.PORT || 4000 --> Si existe una variable de entorno que defina el puerto de escucha de nuestro servidor, utilizamos ese puerto, sino usamos el puerto 4000
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev')); // Escucha las peticiones que llegan al server y las muestran por consola
app.use(express.json()); // Para entender objetos json
app.use(express.urlencoded({extended: false})); // Para entender formularios html

// Routes
// una vez que ya tenemos el servidor inicializado y escuchando definiremos las rutas de acceso a las diferentes partes de nuestra aplicación
app.use("/api/employees", require('./routes/employees.routes'));

/*
app.use('/', (req, res) => {
	console.log('Main route');
})
*/
module.exports = app;
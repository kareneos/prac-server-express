const express = require('express');
const app = express();
const port = 8080;

//Contenido estático
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde la ruta /hola-mundo');
});

// Ruta para manejar cualquier otra solicitud
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/otraSolicitud/404.html');
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});

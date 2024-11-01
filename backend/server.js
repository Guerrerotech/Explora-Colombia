const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const sitiosRouter = require('./routes/sitios');
// Middleware
app.use(cors());
app.use(express.json());
app.use('/sitios', sitiosRouter);
// Conexión a MongoDB
mongoose.connect('mongodb+srv://guerrerotechia:1BR6SJQIMRoIWcAE@cluster0.5jw1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB', err));

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

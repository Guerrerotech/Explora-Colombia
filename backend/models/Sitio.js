const mongoose = require('mongoose');

const sitioSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String,
  descripcion: String,
  imagenUrl: String,
  responsable: String,
  correo: String,
  telefono: String
});

module.exports = mongoose.model('Sitio', sitioSchema);
const express = require('express');
const Sitio = require('../models/Sitio');
const router = express.Router();

// Ruta para obtener todos los sitios
router.get('/', async (req, res) => {
  try {
    const sitios = await Sitio.find();
    res.json(sitios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo sitio
router.post('/', async (req, res) => {
  const sitio = new Sitio(req.body);
  try {
    const nuevoSitio = await sitio.save();
    res.status(201).json(nuevoSitio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
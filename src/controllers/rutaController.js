import { ruta_MongooseModel } from '../models/rutaModel.js';

// Controlador para obtener todas las rutas activas
export const getAllRutaspActivas = async (req, res) => {
  try {
    const rutasActivas = await ruta_MongooseModel.find();
    res.status(200).json(rutasActivas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una ruta activa específica por su ID
export const getRutapActivaById = async (req, res) => {
  try {
    const rutaActiva = await ruta_MongooseModel.findById(req.params.id);
    if (!rutaActiva) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(rutaActiva);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva ruta activa
export const createRutapActiva = async (req, res) => {
  try {
    const nuevaRutaActiva = await ruta_MongooseModel.create(req.body);
    res.status(201).json(nuevaRutaActiva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar una ruta activa por su ID
export const updateRutapActiva = async (req, res) => {
  try {
    const rutaActivaActualizada = await ruta_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!rutaActivaActualizada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(rutaActivaActualizada);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para eliminar una ruta activa por su ID
export const deleteRutapActiva = async (req, res) => {
  try {
    const rutaActivaEliminada = await ruta_MongooseModel.findByIdAndRemove(req.params.id);
    if (!rutaActivaEliminada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

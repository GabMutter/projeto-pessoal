const eventoModel = require('../models/eventoModel');

const getAllEventos = async (req, res) => {
  try {
    const eventos = await eventoModel.getAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventoById = async (req, res) => {
  try {
    const evento = await eventoModel.getById(req.params.id);
    if (evento) {
      res.status(200).json(evento);
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvento = async (req, res) => {
  try {
    const novo = await eventoModel.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvento = async (req, res) => {
  try {
    const atualizado = await eventoModel.update(req.params.id, req.body);
    if (atualizado) {
      res.status(200).json(atualizado);
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvento = async (req, res) => {
  try {
    const deletado = await eventoModel.delete(req.params.id);
    if (deletado) {
      res.status(200).json({ message: 'Evento deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEventos,
  getEventoById,
  createEvento,
  updateEvento,
  deleteEvento
};
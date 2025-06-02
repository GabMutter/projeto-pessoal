const anotacaoModel = require('../models/anotacaoModel');

const getAllAnotacoes = async (req, res) => {
  try {
    const anotacoes = await anotacaoModel.getAll();
    res.status(200).json(anotacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnotacaoById = async (req, res) => {
  try {
    const anotacao = await anotacaoModel.getById(req.params.id);
    if (anotacao) {
      res.status(200).json(anotacao);
    } else {
      res.status(404).json({ error: 'Anotação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAnotacao = async (req, res) => {
  try {
    const nova = await anotacaoModel.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAnotacao = async (req, res) => {
  try {
    const atualizada = await anotacaoModel.update(req.params.id, req.body);
    if (atualizada) {
      res.status(200).json(atualizada);
    } else {
      res.status(404).json({ error: 'Anotação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAnotacao = async (req, res) => {
  try {
    const deletada = await anotacaoModel.delete(req.params.id);
    if (deletada) {
      res.status(200).json({ message: 'Anotação deletada com sucesso' });
    } else {
      res.status(404).json({ error: 'Anotação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAnotacoes,
  getAnotacaoById,
  createAnotacao,
  updateAnotacao,
  deleteAnotacao
};
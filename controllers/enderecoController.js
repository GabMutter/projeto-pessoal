const enderecoModel = require('../models/enderecoModel');

const getAllEnderecos = async (req, res) => {
  try {
    const Enderecos = await enderecoModel.getAll();
    res.status(200).json(Enderecos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEnderecoById = async (req, res) => {
  try {
    const endereco = await enderecoModel.getById(req.params.id);
    if (endereco) {
      res.status(200).json(endereco);
    } else {
      res.status(404).json({ error: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEndereco = async (req, res) => {
  try {
    const { rua, numero, bairro } = req.body;
    const newEndereco = await enderecoModel.create(rua, numero, bairro);
    res.status(201).json(newEndereco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEndereco = async (req, res) => {
  try {
    const { rua, numero, bairro } = req.body;
    const updatedEndereco = await enderecoModel.update(req.params.id, rua, numero, bairro);
    if (updatedEndereco) {
      res.status(200).json(updatedEndereco);
    } else {
      res.status(404).json({ error: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEndereco = async (req, res) => {
  try {
    const deletedEndereco = await enderecoModel.delete(req.params.id);
    if (deletedEndereco) {
      res.status(200).json(deletedEndereco);
    } else {
      res.status(404).json({ error: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEnderecos,
  getEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco
};

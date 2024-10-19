const express = require('express');
const router = express.Router();

//Importando dotenv para utilizar a senha secreta
require('dotenv').config();

// Importa o JWT
const jwt = require('jsonwebtoken');

// Importa o model de usuário
const { Usuario } = require('../../models');


// Secret para o JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Rota de Registro (Sign-up)
router.get('/', (req, res) => {
  res.send('Rota de autenticação');
});

router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verifica se o e-mail e o já estão em uso
    const existingEmail = await Usuario.findOne({ where: { email } });
    const existingNome = await Usuario.findOne({ where: { nome } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Já existe um usuário registrado com esse e-mail.' });
    }
    if (existingNome) {
      return res.status(400).json({ error: 'Já existe um usuário registrado com esse nome.' });
    }

    // Cria o novo usuário
    const newUser = await Usuario.create({ nome, email, senha });

    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar o usuário.' });
  }
});

// Rota de Login (Sign-in)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'E-mail ou senha inválidos.' });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await user.validPassword(senha);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'E-mail ou senha inválidos.' });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h' // Token expira em 1 hora
    });

    res.status(200).json({ message: 'Login realizado com sucesso.', token });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

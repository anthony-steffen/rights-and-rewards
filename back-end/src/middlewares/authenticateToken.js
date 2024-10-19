const jwt = require('jsonwebtoken');

// Middleware para autenticação de token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido.' });
    }

    //Se o token for válido, armazena as informações do usuário na requisição
    req.user = user;
    next(); //Passa para a próxima função
  });
}

module.exports = authenticateToken;
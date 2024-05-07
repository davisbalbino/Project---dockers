const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Endpoint para autenticação de login
const users = require('./db');

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Credenciais recebidas:', username, password); 
    const user = users.find(u => u.username === username && u.password === password);
    console.log('Usuário encontrado:', user); 
    if (user) {
        res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

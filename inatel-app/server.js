const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017';
const DB_NAME = 'test';
const COLLECTION_NAME = 'users';

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Endpoint para autenticação de login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Credenciais recebidas:', username, password);

    try {
        // Conectar ao MongoDB
        const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
        await client.connect();
        console.log("Conectado ao servidor MongoDB");

        // Selecionar o banco de dados
        const db = client.db(DB_NAME);

        // Selecionar a coleção
        const collection = db.collection(COLLECTION_NAME);

        // Consultar o banco de dados para encontrar o usuário
        const user = await collection.findOne({ username, password });

        if (user) {
            res.json({ success: true, message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    } 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

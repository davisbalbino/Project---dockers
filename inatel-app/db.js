const { MongoClient } = require('mongodb');

// Configurações do MongoDB
const MONGO_URI = 'mongodb://root:root@localhost:27017'; // URI de conexão com autenticação
const DB_NAME = 'test'; // Nome do banco de dados
const COLLECTION_NAME = 'users'; // Nome da coleção

// Dados dos usuários
const usersData = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
];

// Função assíncrona para inserir os usuários no banco de dados
async function insertUsers() {
    let client;

    try {
        // Conectar ao MongoDB
        client = new MongoClient(MONGO_URI);
        await client.connect();
        console.log("Conectado ao servidor MongoDB");

        // Selecionar o banco de dados
        const db = client.db(DB_NAME);

        // Selecionar a coleção
        const collection = db.collection(COLLECTION_NAME);

        // Inserir os usuários na coleção
        const result = await collection.insertMany(usersData);
        console.log("Usuários inseridos com sucesso:", result.insertedCount);

    } catch (error) {
        console.error("Erro ao inserir usuários:", error);
    } finally {
        if (client) {
            // Fechar a conexão com o cliente
            await client.close();
            console.log("Conexão com o MongoDB fechada");
        }
    }
}

// Chamar a função para inserir os usuários
insertUsers();

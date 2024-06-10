const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017';
const DB_NAME = 'test';
const COLLECTION_NAME = 'users';

// Dados dos usuários
const usersData = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Função para inserir os usuários no banco de dados
async function insertUsers() {
    let client; // Declaração da variável client fora do bloco try

    try {
        // Conectar ao MongoDB
        client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
        await client.connect();
        console.log("Conectado ao servidor MongoDB");

        // Selecionar o banco de dados
        const db = client.db(DB_NAME);

        // Selecionar a coleção
        const collection = db.collection(COLLECTION_NAME);

        // Inserir os usuários na coleção
        await collection.insertMany(usersData);
        console.log("Usuários inseridos com sucesso");

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

const { MongoClient } = require('mongodb');

// Configurações do banco de dados
const MONGODB_URI = 'mongodb://root:root@localhost:27017'; // URI de conexão do MongoDB
const DB_NAME = 'test';
const COLLECTION_NAME = 'users';

// Dados dos usuários a serem adicionados
const usersToAdd = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'password' }
];

async function addUsers(users) {
    const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

    try {
        // Conectar ao MongoDB
        await client.connect();
        console.log("Conectado ao servidor MongoDB");

        // Selecionar o banco de dados
        const db = client.db(DB_NAME);

        // Selecionar a coleção
        const collection = db.collection(COLLECTION_NAME);

        // Inserir cada usuário na coleção
        const insertResults = await Promise.all(
            users.map(user => collection.insertOne(user))
        );

        insertResults.forEach(result => {
            console.log(`Usuário inserido com ID: ${result.insertedId}`);
        });

        console.log("Todos os usuários foram adicionados com sucesso.");

    } catch (error) {
        console.error("Erro ao adicionar usuários:", error);
    } finally {
        // Fechar conexão com o banco de dados
        await client.close();
        console.log("Conexão com MongoDB fechada.");
    }
}

// Chamar a função para adicionar os usuários
addUsers(usersToAdd);

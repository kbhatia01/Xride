const { Client } = require('pg');
const connectionString = 'postgres://postgres:postgres@localhost:5434/karan';
const client = new Client({
    connectionString: connectionString
});
client.connect();

module.exports = { client };
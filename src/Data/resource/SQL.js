const { Client } = require('pg');

const connectionString = require('../../config/stage').local.SQL;
const client = new Client({
    connectionString: connectionString
});
client.connect();

module.exports = { client };
const postgres = require('postgres')

const sql = postgres({
    user: 'postgres',
    host: 'localhost',
    database: 'db',
    password: '',
    port: 5432
})

module.exports = sql
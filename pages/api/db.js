const postgres = require('postgres')

const sql = postgres({
    user: 'postgres',
    host: 'localhost',
    database: 'db',
    password: '',
    port: 5432
})

export default async (req, res) => {
    console.log(req.body)
    res.statusCode = 200
    const users = await sql`
        SELECT * FROM users
    `
    res.json(users)
}
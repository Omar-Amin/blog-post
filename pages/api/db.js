const postgres = require('postgres')

const sql = postgres({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: '1234',
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
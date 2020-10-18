const sql = require('./db.js')

export default async (req, res) => {
    res.statusCode = 200

    const { username, password, email, salting } = req.body

    const data = {
        username: username,
        password: password,
        email: email,
        salting: salting
    }

    const { count } = await sql`
    insert into users 
    ${sql(data, 'username', 'email', 'password', 'salting')
        }
    ON CONFLICT DO NOTHING
    `

    res.json({ type: count, name: username })
}

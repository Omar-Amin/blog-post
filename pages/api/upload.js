const sql = require('./db.js')

export default async (req, res) => {
    res.statusCode = 200

    const data = req.body

    const { count } = await sql`
    insert into posts 
    ${sql(data, 'title', 'body', 'user_id', 'author', 'date_created')
        }
    `

    res.json(count)
}
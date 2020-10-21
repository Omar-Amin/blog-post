const sql = require('./db.js')

export default async (req, res) => {
    res.statusCode = 200

    const { user_id } = req.query

    const users = await sql`
        select * from posts where user_id = ${user_id} order by date_created desc
    `

    res.json(users)

}

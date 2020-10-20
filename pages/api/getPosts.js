const sql = require('./db.js')

export default async (req, res) => {
    res.statusCode = 200

    const users = await sql`
        select * from posts order by date_created desc
    `

    res.json(users)

}

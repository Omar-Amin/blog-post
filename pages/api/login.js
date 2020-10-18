import Hash from '../security/hashing.js'

const sql = require('./db.js')

export default async (req, res) => {
    var isCorrect = false;

    res.statusCode = 200
    const { username, password } = req.body
    const users = await sql`
            SELECT * FROM users WHERE username = ${username}
    `
    // checks if the selected user has the same password after hashing the password with the salt
    if (users.length == 1) {
        const user = users[0]
        if (Hash(password, user.salting) === user.password) {
            isCorrect = true;
        }
    }

    if (isCorrect) {
        res.json(username)
    } else {
        res.json(false)
    }

}

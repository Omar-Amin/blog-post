import GenerateSalt from '../security/salting.js'
import Hash from '../security/hashing.js'

const sql = require('./db.js')

export default async (req, res) => {
  const salt = GenerateSalt();

  const s = {
    username: 'John',
    email: 'Doe',
    password: Hash('1234', salt),
    salting: salt
  }

  res.statusCode = 200
  const users = await sql`
  insert into users 
  ${sql(s, 'username', 'email', 'password', 'salting')
    }
  ON CONFLICT DO NOTHING
  `
  res.json(users)
}
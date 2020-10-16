var hash = require('object-hash')

export default function Hash(password, salt) {
    return hash(password + salt)
}
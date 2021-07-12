
const auth = require('./auth/auth')
const rooms = require('./rooms')
const database = require('./database')

module.exports =
[
    auth,
    rooms,
    database
];


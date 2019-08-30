const config = require('config');
const pgp = require('pg-promise')({
    capSQL: true
});

var connectionString = config.get('db');
const db = pgp(connectionString);

module.exports = {
    pg : pgp,
    db : db
}
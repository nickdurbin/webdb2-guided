const knex = require('knex')
config = require('../knexfile')

const db = knex(config.development)

module.exports = db
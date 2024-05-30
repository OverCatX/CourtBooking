const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '16112005',
    database: 'BadmintonSystem',
    port: 5432
})
if(pool.connect()){
    console.log('connected to database')
}
module.exports = {
    pool
}
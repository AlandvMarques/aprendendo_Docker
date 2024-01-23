/* eslint-disable indent */

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_User,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB


});

module.exports = connection; 
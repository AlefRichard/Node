var mysql = require('mysql');

var connMySQL = function(){
    console.log('conexao estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'teste',
        password: 'teste',
        database : 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
}
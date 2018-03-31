var mysql = require('mysql');

var connMySQL = function(){
    console.log('conexao estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'teste',
        database : 'portal_noticias'
    });
}

module.exports = function () {
    console.log('funcionou db autoload');
    return connMySQL;
}
let mysql = require('mysql');

let connMySQL = function () {
	console.log("Iniciada a conexão com o banco");
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'teste',
        password: 'teste',
        database: 'sitepomba'
    });
}

module.exports = function(){
	return connMySQL;
}


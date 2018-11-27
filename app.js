let app = require('./config/server.js');

let port = process.env.PORT;

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});

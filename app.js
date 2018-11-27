let app = require('./config/server.js');

let port = 3000;

app.listen(process.env.PORT, function(){
	var host = server.address().address
  	var port = server.address().port
	console.log('Servidor rodando com express na porta', port);
});

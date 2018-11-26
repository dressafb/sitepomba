module.exports.getNotas = function (app, req, res) {
    let connection = app.config.dbConnection();
	let notasModel = new app.app.models.notasModel(connection);

	notasModel.getNotas(function (error, result) {
		res.render('notas/notas', {notas: result});
	}); 
}

module.exports.getNotaId = function (app, req, res) {
    let connection = app.config.dbConnection();
	let notasModel = new app.app.models.notasModel(connection);
	let id = req.query.id;
	
	notasModel.getNota(id,function (error, result) {
		res.render('notas/nota', {notas: result});
	}); 
}

module.exports.getNota = function (app, req, res) {
    let connection = app.config.dbConnection();
	let notasModel = new app.app.models.notasModel(connection);

	notasModel.getNotas( function (error, result) {
			res.render('notas/salvar', {notas: result, erros: {}});
	}); 
}

module.exports.insertNota = function (app, req, res) {
	let notas = req.body;

		req.assert("nome", "Nome é obrigatório").notEmpty();
        req.assert("descricao", "Descrição é obrigatório").notEmpty();
		req.assert("horario", "Horário é obrigatório").notEmpty();
		req.assert("email", 'Email invalido').notEmpty();
		req.assert("email", 'Email invalido').isEmail();


		var erros = req.validationErrors();
        if(erros){
            res.render('notas/salvar',{erros: erros});
            return;
		}

		let connection = app.config.dbConnection();
		let notasModel = new app.app.models.notasModel(connection);

		notasModel.storeNotas(notas,function (error, result) {
			res.render('/notas');
		});

		setTimeout(function(){ res.redirect('/notas/salvar'); }, 2000);
}

module.exports.deleteNota = function (app, req, res) {
   		let notas = req.body;
		let connection = app.config.dbConnection();
		let notasModel = new app.app.models.notasModel(connection);
		
		notasModel.deleteNotas(notas, function (error, result) {
			res.render('/notas');
		});
		setTimeout(function(){ res.redirect('/notas/salvar'); }, 2000);
}

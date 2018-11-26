module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('login/login',{erros: {}});
	});

	app.post('/login/enter', function(req, res){
		app.app.controllers.users.userAutenticar(app,req,res);
	});
}

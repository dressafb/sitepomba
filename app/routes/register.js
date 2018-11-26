module.exports = function(app){
	app.get('/register', function(req, res){
		res.render('login/register', {erros: {}, errado: {}});
	});

	app.post('/register/save', function(req, res){
		app.app.controllers.users.insertUser(app,req,res);
	});
}

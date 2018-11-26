module.exports.insertUser = function (app, req, res) {
    let connection = app.config.dbConnection();
    let userModel = new app.app.models.userModel(connection);
    let user = req.body;

    req.assert("username", "obrigatório").notEmpty();
    req.assert("nome", 'obrigatório').notEmpty();
    req.assert("email", 'obrigatório').notEmpty();
    req.assert("senha", 'obrigatório').notEmpty();
    req.assert("email", 'obrigatório').isEmail();

    var erros = req.validationErrors();

    if(erros){
        res.render('login/register',{erros: erros , errado: {}});
        return;
    }

    userModel.getUsername(user, function (error, result) {
        if (error) {
            res.render('login/register', {erros: error, errado: {}});
        }
        if(result.length > 0){
            var errado ="username already being used" ;
            console.log("Erro 1");
            console.log(errado);
            res.render('login/register',{errado: errado, erros: {}});
        }else{
        userModel.storeUser(user, function (error, result) {
            res.redirect('/');
        }); 
        }
    }); 


}

module.exports.userAutenticar = function (app, req, res) {
    let connection = app.config.dbConnection();
	let userModel = new app.app.models.userModel(connection);
	let user = req.body;

    req.assert("username", "obrigatório").notEmpty();
    req.assert("senha", 'obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('login/login',{erros: erros});
        return;
    }

	userModel.userAutenticar(user, function (error, result) {
        if (error) {
            console.log("Erro");
            console.log(error);
            console.error("usuário não autenticado");
            req.session.autorizado = false; 
            res.render('login/login', {erros: error});
        }
        if(result.length > 0){
            console.log("Usuário logado");
            console.log("Resultado da query",result);
            req.session.autorizado = true;
            req.session.username = user.username;

            if(user.username == 'admin'){
                req.session.type = 1;
            }
            else{
                req.session.type = 0;
            }
            res.redirect('/');

        }else{
            console.log("Usuário ou password inexistente");
            var erro = "Usuário ou password inexistente";
            req.session.autorizado = false;
            res.render('login/login', {erros: erro});
        }
    });
}



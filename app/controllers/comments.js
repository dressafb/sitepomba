module.exports.insertComment = function (app, req, res) {

	let comment = req.body;

        req.assert("commentText", "Descrição é obrigatório").notEmpty();

		var erros = req.validationErrors();
        if(erros){
        	res.redirect('/post?id=' + comment.idpost);
            //res.render('posts/post',{erros: erros});
            //return;
		}

		if (!req.session.autorizado){

			res.redirect('/post?id=' + comment.idpost);
		}

		let connection = app.config.dbConnection();
		let commentModel = new app.app.models.commentModel(connection);

		commentModel.insertComment(comment,function (error, result) {
			res.redirect('/post?id=' + comment.idpost);
		});
}

module.exports.deleteComment = function (app, req, res) {
	let connection = app.config.dbConnection();
	let commentModel = new app.app.models.commentModel(connection);
	let idcomment = req.body;

	commentModel.deleteComment(idcomment,function (error, result) {
			res.redirect('/post?id=' + idcomment.idpost);
	});
}

module.exports.updateComment = function (app, req, res) {
	let connection = app.config.dbConnection();
	let commentModel = new app.app.models.commentModel(connection);
	let comment = req.body;

	commentModel.updateComment(comment,function (error, result) {
			res.redirect('/post?id=' + comment.idpost);
	});
}

module.exports = function(app){
	app.get('/post', function(req, res){
		app.app.controllers.posts.getPage(app,req,res);
	});

	app.post('/comment/save', function(req, res){
		app.app.controllers.comments.insertComment(app,req,res);
	});

	app.post('/comment/delete', function(req, res){
		app.app.controllers.comments.deleteComment(app,req,res);
	});

	app.post('/comment/update', function(req, res){
		app.app.controllers.comments.updateComment(app,req,res);
	});
}
module.exports = function(app){
	app.get('/dashboard', function(req, res){
		app.app.controllers.posts.getDashboard(app,req,res);
	});

	app.post('/dashboard/delete', function(req, res){
		app.app.controllers.posts.deletePost(app,req,res);
	});

	app.post('/dashboard/update', function(req, res){
	});

	app.post('/dashboard/post', function(req, res){
		app.app.controllers.posts.insertPost(app,req,res);
	});
}
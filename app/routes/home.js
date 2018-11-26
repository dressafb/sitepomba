module.exports = function(app){
	app.get('/', function(req, res){
		app.app.controllers.posts.getPosts(app,req,res);
	});
}

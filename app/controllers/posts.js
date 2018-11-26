module.exports.getPosts = function (app, req, res) {
    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);

	postModel.getPosts(function (error, result) {
		res.render('home/main', {posts: result});
	}); 
}

module.exports.getPost = function (app, req, res) {
    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);
	let id = req.query.id;

	postModel.getPost(id,function (error, result) {
		res.render('posts/post', {post: result});
	}); 
}

module.exports.getPage = function (app, req, res) {
    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);
	let id = req.query.id;

	postModel.getPage(id, function(err, result1) {
	  postModel.getComments(id, function(err, result2) {
	    res.render('posts/post', { rows : result1, rows2: result2});
	  });
	});
}


module.exports.getDashboard = function (app, req, res) {
    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);

		if (req.session.type == 1 ){
			postModel.getPosts(function (error, result) {
				res.render('admin/dashboard', {post: result});
			}); 
		}else{
			res.redirect('/');
		}
}

module.exports.deletePost = function (app, req, res) {
    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);
	let id = req.body;

	postModel.deletePost(id,function (error, result) {
		res.redirect('/dashboard');
	}); 
	
}

module.exports.insertPost = function (app, req, res) {

    let connection = app.config.dbConnection();
	let postModel = new app.app.models.postModel(connection);
	let post = req.body;

	postModel.storePost(post,function (error, result) {
		res.redirect('/dashboard');
	}); 
	
}


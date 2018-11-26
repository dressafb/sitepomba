module.exports = function(app){
	app.get('/aboutme', function(req, res){
		res.render('mystory/mystory');
	});
}

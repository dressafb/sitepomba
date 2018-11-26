 function postModel(connection) {
 	this._conn = connection;
}

postModel.prototype.getPosts = function (callback) {
	let sql = 'SELECT *,DATE_FORMAT(postDia, "%W %M %e %Y") as dataFormat FROM post INNER JOIN user ON post.iduser=user.iduser ORDER by postDia DESC';
	this._conn.query(sql, callback);
}

postModel.prototype.getPost = function ( id, callback) {
	let sql = 'SELECT *,DATE_FORMAT(postDia, "%W %M %e %Y") as dataFormat FROM post INNER JOIN user ON post.iduser=user.iduser where idpost=' + id;
	this._conn.query(sql, callback);
}

postModel.prototype.getPage = function ( id, callback) {
	let sql = 'SELECT *,DATE_FORMAT(postDia, "%W %M %e %Y") as dataFormat FROM post INNER JOIN user ON post.iduser=user.iduser where idpost=' + id;
	this._conn.query(sql, callback);
}

postModel.prototype.getComments = function ( id, callback) {
	let sql = 'SELECT *, DATE_FORMAT(comment.commentDia, "%m/%d/%Y - %H:%i") as commentData FROM comment INNER JOIN user ON comment.username=user.username where idpost='+id+' ORDER BY commentData DESC';
	this._conn.query(sql, callback);
}

postModel.prototype.storePost = function (post, callback) {
	this._conn.query('insert into post set iduser=1, ?',post, callback);
}

postModel.prototype.deletePost = function ( id, callback) {
	connection.query('DELETE FROM post WHERE ?',id , callback);
}

module.exports = function(){
	return postModel;
}


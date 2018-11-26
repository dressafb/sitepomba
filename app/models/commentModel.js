 function commentModel(connection) {
 	this._conn = connection;
}

commentModel.prototype.getComments = function (callback) {
	let sql = 'SELECT * FROM comment';
	this._conn.query(sql, callback);
}

commentModel.prototype.getComment = function ( id, callback) {
	let sql = 'SELECT * FROM comment where idcomment=' + id;
	this._conn.query(sql, callback);
}

commentModel.prototype.insertComment = function (comment, callback) {
	this._conn.query('insert into comment set ?',comment, callback);
}

commentModel.prototype.deleteComment = function (idcomment, callback) {
	let sql = 'DELETE FROM comment WHERE idcomment=' + idcomment.idcomment;
	this._conn.query(sql, callback);
}

commentModel.prototype.updateComment = function (comment, callback) {
	let sql = "UPDATE comment SET commentText ='"+comment.commentText+"'' WHERE idcomment =" +comment.idcomment;
	this._conn.query(sql, callback);
}

module.exports = function(){
	return commentModel;
}
 function userModel(connection) {
 	this._conn = connection;
}

userModel.prototype.getUser = function ( id, callback) {
	let sql = 'select * from user where iduser=' + id;
	this._conn.query(sql, callback);
}

userModel.prototype.getUsername = function ( user, callback) {
	let sql = 'select * from user where username="'+ user.username+'"';
	this._conn.query(sql, callback);
}

userModel.prototype.storeUser = function (user, callback) {
	this._conn.query('insert into user set ?',user, callback);
}

userModel.prototype.userAutenticar = function (user, callback) {
	console.log("CHeguei no usuárioDAO autenticar");
	let sql = "select * from user where username = '"+user.username+"' and senha = '"+user.senha + "'";
	console.log(sql);
	this._conn.query(sql, callback)
}

module.exports = function(){
	return userModel;
}


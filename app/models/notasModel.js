 function notasModel(connection) {
 	this._conn = connection;
}

notasModel.prototype.getNotas = function (callback) {
	let sql = 'select * from disciplina';
	this._conn.query(sql, callback);
}

notasModel.prototype.getNota = function ( id, callback) {
	let sql = 'select * from disciplina where id=' + id;
	this._conn.query(sql, callback);
}

notasModel.prototype.storeNotas = function (notas, id, callback) {
	this._conn.query('insert into disciplina set ?',notas, callback);
}

notasModel.prototype.deleteNotas = function (notas, id, callback) {
	this._conn.query('DELETE FROM disciplina WHERE ?',notas , callback);
}

module.exports = function(){
	return notasModel;
}
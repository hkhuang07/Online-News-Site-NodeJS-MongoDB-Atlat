var mongoose = require('mongoose');

var chuDeSchema = new mongoose.Schema({
	TenChuDe: { type: String, unique: true, require: true }
});

var chuDeModel = mongoose.model('ChuDe', chuDeSchema);

module.exports = chuDeModel;
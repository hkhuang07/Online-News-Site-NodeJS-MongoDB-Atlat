var mongoose = require('mongoose');

const baiVietSchema = new mongoose.Schema({
	ChuDe: { type: mongoose.Schema.Types.ObjectId, ref: 'ChuDe' },
	TaiKhoan: { type: mongoose.Schema.Types.ObjectId, ref: 'TaiKhoan' },
	TieuDe: { type: String, required: true },
	TomTat: { type: String, required: true },
	NoiDung: { type: String, required: true },
	NgayDang: { type: Date, default: Date.now },
	LuotXem: { type: Number, default: 0 },
	KiemDuyet: { type: Number, default: 0 }
});

var baiVietModel = mongoose.model('BaiViet', baiVietSchema);

module.exports = baiVietModel;
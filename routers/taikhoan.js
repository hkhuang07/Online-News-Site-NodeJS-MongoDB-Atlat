var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var TaiKhoan = require('../models/taikhoan');

// GET: Danh sách tài khoản
router.get('/', async (req, res) => {
	var tk = await TaiKhoan.find();
	res.render('taikhoan', {
		title: 'Danh sách tài khoản',
		taikhoan: tk
	});
});

// GET: Thêm tài khoản
router.get('/them', async (req, res) => {
	res.render('taikhoan_them', {
		title: 'Thêm tài khoản'
	});
});

// POST: Thêm tài khoản
router.post('/them', async (req, res) => {
	var salt = bcrypt.genSaltSync(10);
	var data = {
		HoVaTen: req.body.HoVaTen,
		Email: req.body.Email,
		HinhAnh: req.body.HinhAnh,
		TenDangNhap: req.body.TenDangNhap,
		MatKhau: bcrypt.hashSync(req.body.MatKhau, salt)
	};
	await TaiKhoan.create(data);
	res.redirect('/taikhoan');
});

// GET: Sửa tài khoản
router.get('/sua/:id', async (req, res) => {
	var id = req.params.id;
	var tk = await TaiKhoan.findById(id);
	res.render('taikhoan_sua', {
		title: 'Sửa tài khoản',
		taikhoan: tk
	});
});

// POST: Sửa tài khoản
router.post('/sua/:id', async (req, res) => {
	var id = req.params.id;
	var salt = bcrypt.genSaltSync(10);
	var data = {
		HoVaTen: req.body.HoVaTen,
		Email: req.body.Email,
		HinhAnh: req.body.HinhAnh,
		TenDangNhap: req.body.TenDangNhap,
		QuyenHan: req.body.QuyenHan,
		KichHoat: req.body.KichHoat
	};
	if(req.body.MatKhau)
		data['MatKhau'] = bcrypt.hashSync(req.body.MatKhau, salt);
	await TaiKhoan.findByIdAndUpdate(id, data);
	res.redirect('/taikhoan');
});

// GET: Xóa tài khoản
router.get('/xoa/:id', async (req, res) => {
	var id = req.params.id;
	await TaiKhoan.findByIdAndDelete(id);
	res.redirect('/taikhoan');
});

module.exports = router;
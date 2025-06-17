var express = require('express');
var router = express.Router();
var ChuDe = require('../models/chude');

// GET: Danh sách chủ đề
router.get('/', async (req, res) => {
	var cd = await ChuDe.find();
	res.render('chude', {
		title: 'Danh sách chủ đề',
		chude: cd
	});
});

// GET: Thêm chủ đề
router.get('/them', async (req, res) => {
	res.render('chude_them', {
		title: 'Thêm chủ đề'
	});
});

// POST: Thêm chủ đề
router.post('/them', async (req, res) => {
	var data = {
		TenChuDe: req.body.TenChuDe
	};
	await ChuDe.create(data);
	res.redirect('/chude');
});

// GET: Sửa chủ đề
router.get('/sua/:id', async (req, res) => {
	var id = req.params.id;
	var cd = await ChuDe.findById(id);
	res.render('chude_sua', {
		title: 'Sửa chủ đề',
		chude: cd
	});
});

// POST: Sửa chủ đề
router.post('/sua/:id', async (req, res) => {
	var id = req.params.id;
	var data = {
		TenChuDe: req.body.TenChuDe
	};
	await ChuDe.findByIdAndUpdate(id, data);
	res.redirect('/chude');
});

// GET: Xóa chủ đề
router.get('/xoa/:id', async (req, res) => {
	var id = req.params.id;
	await ChuDe.findByIdAndDelete(id);
	res.redirect('/chude');
});

module.exports = router;
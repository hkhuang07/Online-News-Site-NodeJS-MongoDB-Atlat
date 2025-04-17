var express = require('express');
var router = express.Router();
var firstImage = require('../modules/firstimage');
var ChuDe = require('../models/chude');
var BaiViet = require('../models/baiviet');

// GET: Trang chủ
router.get('/', async (req, res) => {
	//Lấy chuyên mục hiển thị vào menu
	var cm = await ChuDe.find();
	//Lấy 12 bài viết 
	var bv = await BaiViet.find({KiemDuyet: 1})
		.sort({NgayDang: -1})
		.populate('ChuDe')
		.populate('TaiKhoan')
		.limit(12).exec();
	//Lấy 3 bài viết xem nhiều nhất hiển thị vào cột phải
	var xnn = await BaiViet.find({KiemDuyet: 1})
		.sort({LuotXem: -1})
		.populate('ChuDe')
		.populate('TaiKhoan')
		.limit(3).exec();
	res.render('index',{
		title: 'Trang Chủ',
		chuyenmuc:cm,
		baiviet: bv,
		xemnhieunhat:xnn,
		firstImage: firstImage
	});
});

// GET: Lấy các bài viết cùng mã chủ đề
router.get('/baiviet/chude/:id', async (req, res) => {
	var id = req.params.id;
	//Lấy chuyên mục hiển thị vào menu
	var cm = await ChuDe.find();
	//Lấy thông tin chủ đề hiện tại
	var cd = await ChuDe.findById(id);
	//Get 8 bài viết mới nhất cùng chuyên mục
	var bv = await BaiViet.find({KiemDuyet: 1, ChuDe: id})
		.sort({NgayDang: -1})
		.populate('ChuDe')
		.populate('TaiKhoan')
		.limit(8).exec();
		//Lấy 3 bài viết xem nhiều nhất hiển thị vào cột phải
	var xnn = await BaiViet.find({KiemDuyet: 1, ChuDe: id})
		.sort({LuotXem: -1})
		.populate('ChuDe')
		.populate('TaiKhoan')
		.limit(3).exec();
	res.render('baiviet_chude', {
		title: 'Bài viết cùng chuyên mục',
		chuyenmuc: cm,
		chude: cd,
		baiviet: bv,
		xemnhieunhat: xnn,
		firstImage: firstImage
	});

});

// GET: Xem chi tiết bài viết
router.get('/baiviet/chitiet/:id', async (req, res) => {
	var id = req.params.id;
	//Lấy chuyên mục hiển thị vào menu
	var cm = await ChuDe.find();
	//Lấy thông tin bài viết hiện tại
	var bv = await BaiViet.findById(id)
		.populate('ChuDe')
		.populate('TaiKhoan').exec();
	//Xử lý tăng lượt xem bài viết
	await BaiViet.findByIdAndUpdate(id, {
		LuotXem: bv.LuotXem+1
	});

	//Lấy 3 bài viết được xem nhiều nhất hiên thị vào cột phải
	var xnn = await BaiViet.find({KiemDuyet: 1})
		.sort({LuotXem: -1})
		.populate('ChuDe')
		.populate('TaiKhoan')
		.limit(3).exec();

	res.render('baiviet_chitiet', {
		chuyenmuc: cm,
		baiviet: bv,
		xemnhieunhat: xnn,
		firstImage: firstImage
	});
});

// GET: Tin mới nhất
router.get('/tinmoi', async (req, res) => {
	res.render('tinmoinhat', {
		title: 'Tin mới nhất'
	});
});

// POST: Kết quả tìm kiếm
router.post('/timkiem', async (req, res) => {
	var tukhoa = req.body.tukhoa;
	
	// Xử lý tìm kiếm bài viết
	var bv = [];
	
	res.render('timkiem', {
		title: 'Kết quả tìm kiếm',
		baiviet: bv,
		tukhoa: tukhoa
	});
});

// GET: Lỗi
router.get('/error', async (req, res) => {
	res.render('error', {
		title: 'Lỗi'
	});
});

// GET: Thành công
router.get('/success', async (req, res) => {
	res.render('success', {
		title: 'Hoàn thành'
	});
});

module.exports = router;
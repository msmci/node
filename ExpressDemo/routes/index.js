var express = require('express');
var router = express.Router();
const userController = require('../components/user/Controller');

/* GET home page. */

// http://localhost:3000/chart
router.get('/chart', function (req, res, next) {
  res.render('product/chart');
});

// http://localhost:3000/trangchu
router.get('/trangchu', function (req, res, next) {
  res.render('index');
});

// http://localhost:3000/login
router.get('/login', function (req, res, next) {
  res.render('user/login')
});

// http://localhost:3000/login
// xử lí login
// đọc email và pass từ form
// nếu thành công chuyển sang trang chủ, ngược lại chuyển sang trang login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
      res.redirect('/trangchu')
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.redirect('/login');
  }
});







// http://localhost:3000/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// http://localhost:3000/
router.post('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// http://localhost:3000/query?name=sang&age=20
router.get('/query', function (req, res, next) {
  const { name, age } = req.query
  res.render('index', { name, age });
});
// http://localhost:3000/tinh/1/2/3
router.get('/tinh/:a/:b/:c', function (req, res, next) {
  const { a, b, c } = req.params;
  const sum = Number(a) + Number(b) + Number(c);
  res.render('index', { sum });
});
// http://localhost:3000/tinh
router.post('/tinh', function (req, res, next) {
  const { a, b, c } = req.body;
  const kq = Number(a) + Number(b) + Number(c);
  res.render('index', { kq });
});
// http://localhost:3000/tinh-chu-vi?a=2&b=5
router.post('/tinh-chu-vi', function (req, res, next) {
  try {
    const { a, b } = req.query
    const { loai } = req.body;
    const cv = Number(a) + Number(b);
    res.json({ cv });
  } catch (error) {
    next(error);
  }
});

//LAB2 
//http://localhost:3000/dien-tich/hinhchunhat?&a=10&b=20
router.get("/dien-tich/:loai", function (req, res, next) {
  const { a, b } = req.query;
  const { loai } = req.params;
  if (loai == "hinhtron") {
    const dientich = Number(a) * Number(a) * 3.14;
    res.render("dientich", { dientich, loai, a });
  } else if (loai == "hinhchunhat") {
    const dientich = Number(a) * Number(b);
    res.render("dientich", { dientich, loai, a, b });
  } else if (loai == "hinhvuong") {
    const dientich = Number(a) * Number(a);
    res.render("dientich", { dientich, loai, a });
  } else {
    const rong = "Không có dữ liệu";
    res.render("dientich", { rong, loai });
  }
});
//http://localhost:3000/chu-vi?a=10&b=20
router.post("/chu-vi", function (req, res, next) {
  const { a, b } = req.query;
  const { loai } = req.body;
  if (loai == "hinhchunhat") {
    const chuvi = (Number(a) + Number(b)) * 2;
    res.json({ chuvi });
  } else if (loai == "hinhtron") {
    const chuvi = Number(a) * 2 * 3.14;
    res.json({ chuvi });
  } else if (loai == "hinhvuong") {
    const chuvi = Number(a) * 4;
    res.json({ chuvi });
  } else {
    const chuvi = "Không có dữ liệu";
    res.json({ chuvi });
  }
});


module.exports = router;

// HTTP Request Methods
//GET: lấy dữ liệu từ server ( Url + Enter)
// POST: gửi dữ liệu lên server ( form)

// req, res, next
// req: request
//   - req.query: lấy dữ liệu từ url
//   - req.params: lấy dữ liệu từ url
//   - req.body: lấy dữ liệu từ form
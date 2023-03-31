const express = require('express');
const router = express.Router();
const productController = require('../../components/product/Controller')
const categoryController = require('../../components/category/Controller');
const upload = require('../../middle/Uploadfile');

// http://localhost:3000/cpanel/product
// hiển thị danh sách sản phẩm
router.get('/', async (req, res, next) => {
    try {
        const product = await productController.getAllProduct();
        res.render('product/list', { product })
    } catch (error) {
        next(error);
    }
});


// http://localhost:3000/cpanel/product/:id/delete

router.get('/:id/delete', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productController.deleteProduct(id);
        return res.json({ result });
    } catch (error) {
        return res.json({ result: false });
    }
});


// http://localhost:3000/cpanel/product/new
// hiển thị trang thêm mới
router.get('/new', async (req, res, next) => {
    try {
        const category = await categoryController.getAllcategory()
        return res.render('product/new', { category })
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/cpanel/product/new
// xử lí trang thêm mới
// [] kiểm tra đăng nhập... nếu k chuyển qua tang đăng nhập
router.post('/new', [upload.single('image')], async (req, res, next) => {
    try {
        let { body, file } = req;
        if (file) {
            // cmd >>>>>> ipconfig >>>>> ipv4  192.168.1.104
            file = `http://172.16.65.244:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, price, quantity, image, category } = body;
        const result = await productController.addProduct(name, price, quantity, image, category);
        if (result) {
            // redirect để chuyển hướng sang trang khác k cần code lại trang product
            return res.redirect('/cpanel/product/');
        } else {
            return res.redirect('/cpanel/product/new');
        }
    } catch (error) {
        next(error);
    }
});


// http://localhost:3000/cpanel/product/:id/edit
// hiển thị trang cập nhập

router.get('/:id/edit', async (req, res, next) => {
    try {
        let { id } = req.params;
        // lấy sản phẩm theo id
        const product = await productController.getProduct(id);

        // hiển thị all cate
        let category = await categoryController.getAllcategory();
        category = category.map(item => {
            item.selected = false;
            if(item._id.toString() == product.category.toString()){
                item.selected= true;
            }
            return item;
        });
        return res.render('product/update', {product,category});
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/cpanel/product/:id/edit
// xử lí cập nhập
// [] kiểm tra đăng nhập... nếu k chuyển qua tang đăng nhập
router.post('/:id/edit', [upload.single('image')], async (req, res, next) => {
    try {
        let { id } = req.params
        let { body, file } = req;
        if (file) {
            // cmd >>>>>> ipconfig >>>>> ipv4  192.168.1.104
            file = `http://192.168.1.102:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, price, quantity, image, category } = body;
        const result = await productController.updateProduct(id, name, price, quantity, image, category);
        if (result) {
            // redirect để chuyển hướng sang trang khác k cần code lại trang product
            return res.redirect('/cpanel/product/');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;


const productService = require('./Service');

const getAllProduct = async () => {
    try {
        return await productService.getAllProduct();
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id) => {
    try {
        return await productService.deleteProduct(id);
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (name, price, quantity, image, category) => {
    try {
        return await productService.addProduct(name, price, quantity, image, category);
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (id) => {
    try {
        return await productService.getProduct(id);
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (id, name, price, quantity, image, category) => {
    try {
        return await productService.updateProduct(id, name, price, quantity, image, category);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllProduct, deleteProduct, addProduct, getProduct, updateProduct};
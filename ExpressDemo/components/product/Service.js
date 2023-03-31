const express = require('express');
const router = express.Router();

const getAllProduct = async () => {
  try {
    return data
  } catch (error) {
    console.log(error)
  }
}

// xóa sản phẩm theo id
// http://localhost:3000/cpanel/product/:id/delete
const deleteProduct = async (id) => {
  try {
    data = data.filter(item => item._id.toString() != id.toString());
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}


// thêm mới sản phẩm
const addProduct = async (name, price, quantity, image, category) => {
  try {
    const newProduct = { _id: data.length + 1, name, price, quantity, image, category };
    data.push(newProduct);
    return true;
  } catch (error) {
    console.log("thêm lỗi", error);
    return false;
  }
}

// SỬA 
// lấy sản phẩm theo id
const getProduct = async (id) => {
  try {
    const product = data.find(item => item._id.toString() == id.toString());
    console.log('Product', product);
    return product;
  } catch (error) {
    console.log('lấy lỗi', error);
  }
  return null;
}

// cập nhập sản phẩm
const updateProduct = async (id, name, price, quantity, image, category) => {
  try {
    const product = data.find(item => item._id.toString() == id.toString());
    if (product) {
      data = data.map(item => {
        if (item._id.toString() == id.toString()) {
          item.name = name ? name : item.name;
          item.price = price ? price : item.price;
          item.quantity = quantity ? quantity : item.quantity;
          item.image = image ? image : item.image;
          item.category = category ? category : item.category;
        }
        return item;
      });
      return true;
    }
  } catch (error) {
    console.log('update lỗi', error)
  }
  return false;
}


module.exports = { getAllProduct, deleteProduct, addProduct, getProduct, updateProduct };

var data =
  [{
    "_id": 1,
    "name": "Clare",
    "price": 38,
    "quantity": 15,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 5
  }, {
    "_id": 2,
    "name": "Estevan",
    "price": 20,
    "quantity": 35,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 7
  }, {
    "_id": 3,
    "name": "Alexio",
    "price": 33,
    "quantity": 28,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 2
  }, {
    "_id": 4,
    "name": "Catlee",
    "price": 78,
    "quantity": 45,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 2
  }, {
    "_id": 5,
    "name": "Roanna",
    "price": 17,
    "quantity": 82,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 6
  }, {
    "_id": 6,
    "name": "Christa",
    "price": 27,
    "quantity": 58,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 6
  }, {
    "_id": 7,
    "name": "Ingmar",
    "price": 39,
    "quantity": 67,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 2
  }, {
    "_id": 8,
    "name": "Lotte",
    "price": 30,
    "quantity": 56,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 1
  }, {
    "_id": 9,
    "name": "Roby",
    "price": 39,
    "quantity": 66,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 9
  }, {
    "_id": 10,
    "name": "Flem",
    "price": 77,
    "quantity": 97,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 7
  }, {
    "_id": 11,
    "name": "Jeremiah",
    "price": 49,
    "quantity": 76,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 6
  }, {
    "_id": 12,
    "name": "Mohandis",
    "price": 86,
    "quantity": 85,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 10
  }, {
    "_id": 13,
    "name": "Cassey",
    "price": 34,
    "quantity": 54,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 10
  }, {
    "_id": 14,
    "name": "Onfre",
    "price": 17,
    "quantity": 53,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 4
  }, {
    "_id": 15,
    "name": "Carleen",
    "price": 11,
    "quantity": 32,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 2
  }, {
    "_id": 16,
    "name": "Guthrey",
    "price": 81,
    "quantity": 75,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 10
  }, {
    "_id": 17,
    "name": "Mal",
    "price": 88,
    "quantity": 10,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 9
  }, {
    "_id": 18,
    "name": "Dov",
    "price": 51,
    "quantity": 79,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 10
  }, {
    "_id": 19,
    "name": "Gardy",
    "price": 1,
    "quantity": 97,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 4
  }, {
    "_id": 20,
    "name": "Teodora",
    "price": 79,
    "quantity": 49,
    "image": "https://i.redd.it/4laxjtimabh71.jpg",
    "category": 3
  }]
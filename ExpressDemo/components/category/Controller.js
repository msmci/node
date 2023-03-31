

const categoryService = require('./Service');


const getAllcategory = async () => {
    try {
        return await categoryService.getAllcategory();
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getAllcategory};
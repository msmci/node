


// kiểm tra email và pass trong database
// nếu có trả về user
// nếu không trả về null
const login = async (email, password) => {
    try {
        const user = data.find(user => user.email == email);
        if( user && user.password == password){
            return user;
        }
        return null;
    } catch (error) {
        console.log('lỗi: ', error);
        throw error;
    }
}


module.exports = { login };


var data =[
    {_id: 1, email: 'sang@gmail.com', password: '123', name: 'Sang'},
    {_id: 2, email: 'trieu@gmail.com', password: '123', name: 'triệu'},
    {_id: 3, email: 'huan@gmail.com', password: '123', name: 'huân'},
]
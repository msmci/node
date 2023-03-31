


const getAllcategory = async () => {
    try {
        return data;
    } catch (error) {
        console.log("get all cate fail", error);
    }
}


module.exports = { getAllcategory }

var data = [{
    "_id": 1,
    "name": "Tore"
},
{
    "_id": 2,
    "name": "Pearce"
},
{
    "_id": 3,
    "name": "Colver"
},
{
    "_id": 4,
    "name": "Mona"
},
{
    "_id": 5,
    "name": "Pepi"
},
{
    "_id": 6,
    "name": "Laraine"
},
{
    "_id": 7,
    "name": "Jameson"
},
{
    "_id": 8,
    "name": "Odette"
},
{
    "_id": 9,
    "name": "Marge"
},
{
    "_id": 10,
    "name": "Roman"
}]
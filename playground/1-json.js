const fs = require('fs');
// const book = {
//     name: "Yash",
//     planet: "Earth",
//     age: 22
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// // console.log(data.author);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = "Yash"
user.age = 22
// console.log(user);

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);




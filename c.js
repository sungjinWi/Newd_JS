// // require('./a.js') // require는 return 값이 있다 => 객체 요렇게 하고 node c.js하면 a의 콘솔이 찍힌다
// const afile = require("./a.js");
// const bfile = require("./b.js");

// console.log(afile) //빈 객체
// // console.log(module)
// // console.log(module.exports) //빈 객체

// // module.exports = {
// //     name : "sungjin"
// // }

// // console.log(module.exports) 

// // module > nodejs 내장객체
// // module.exports 객체는 결과물을 저장하는 공간

// // require 역할은 내가 가지고오고싶은 파일의 module.exports 객체를 가져오는 것이다

// console.log(afile.a + bfile.b);


// ============================================================================================

// require('./a.js') // require는 return 값이 있다 => 객체 요렇게 하고 node c.js하면 a의 콘솔이 찍힌다
const {a, c} = require("./a.js");
const {b} = require("./b.js");

// module > nodejs 내장객체
// module.exports 객체는 결과물을 저장하는 공간

// require 역할은 내가 가지고오고싶은 파일의 module.exports 객체를 가져오는 것이다

console.log(a+b+c);
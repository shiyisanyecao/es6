// 对象的函数解构json

// let json = {
//   a: 'jspang',
//   b: '技术胖'
// }
// function fun({a, b="web"}) {
//   console.log(a,b);
// }
// fun(json);


// // 数组解构
// let arr = ['jspang','技术胖','前端教程'];
// function fun(a,b,c) {
//   console.log(a,b,c)
// }
// fun(...arr);



// in的用法
// let obj = {
//   a: 'jspang',
//   b: '技术胖'
// }
// console.log('a' in obj);

let arr = ['jspang',,,];
console.log(0 in arr);
// 对象赋值
// let name = 'jspang';
// let skill = 'web';
// let obj = {name,skill};
// console.log(obj);

// key值的构建
// let key = "skill";
// var obj = {
//   [key] : 'web'
// }
// console.log(obj)

// 自定义对象的方法
// let obj = {
//   add: function(a,b) {
//     return a + b;
//   }
// }
// console.log(obj.add(1,2));

// is()
// let obj1 = {name: 'jspang'};
// let obj2 = {name: 'jspang'};
// console.log(obj1.name === obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// console.log(+0 === -0);
// console.log(NaN === NaN);
// // === 同值相等 is严格相等
// console.log(Object.is(+0, -0));
// console.log(Object.is(NaN, NaN));

// assign
let a = {a: 'jspang'};
let b = {b: '技术胖'};
let c = {c: 'web'};
let d = Object.assign(a,b,c);

console.log(d);
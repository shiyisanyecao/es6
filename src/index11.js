// Symbol
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;

// let f = Symbol();

// console.log(typeof(f));

// let jspang = Symbol('技术胖');
// console.log(jspang);
// console.log(jspang.toString());

// symbol在对象中的应用
// let jspang = Symbol();
// let obj = {
//   [jspang]: '技术胖'
// }
// console.log(obj[jspang]);

// let obj = {name: 'jspang',skill: 'web', age: 18};
// for(let item in obj) {
//   console.log(obj[item]);
// }

let obj = {name: 'jspang',skill: 'web'};
let age = Symbol();
obj[age] = 18;
for(let item in obj) {
  console.log(obj[item]);
}
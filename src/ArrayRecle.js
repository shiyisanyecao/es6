// fill
// let arr = ['jspang','技术胖','大胖逼逼叨'];
// arr.fill('web',1, 3);

// 数组循环
// for(let i = 0; i<arr.length; i ++) {}
// let arr = ['jspang','技术胖','大胖逼逼叨'];
// for(let item of arr.keys()) {
//   console.log(item);
// }
// for(let [index, val] of arr.entries()) {
//   console.log(index+":"+val);
// }


// entries
let arr = ['jspang','技术胖','大胖逼逼叨'];
let list = arr.entries();
console.log(list.next().value);
console.log('-----------');
console.log(list.next().value);
console.log('***********');
console.log(list.next().value);
console.log('===========');
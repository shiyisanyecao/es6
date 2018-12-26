// json数组格式

// Array.from方法
// let json = {
//   '0': 'jspang',
//   '1': '技术胖',
//   '2': '大胖逼逼叨',
//   length: 3
// }
// let arr = Array.from(json);
// console.log(arr);

// Array.of方法
// 3,4,5,6
// eval
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// find() 实例方法
let arr = [1,2,3,4,5,6,7,8,9];
arr.find(arr.find(function(value, index, arr){
  return value > 5;
}))
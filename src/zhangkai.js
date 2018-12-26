// function jspang(...arg) {
//   console.log(arg[0]);
//   console.log(arg[1]);
//   console.log(arg[2]);
//   console.log(arg[3]);
// }
// jspang(1,2,3)


// let arr1 = ['www', 'jspang', 'com'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('jiangxiaoying');
// console.log(arr1);
// arg运算符

// rest(剩余)运算符 ...
function jspang(first, ...arg) {
  // console.log(arg.length);
  // for(let i = 0; i<arg.length; i ++) {
  //   console.log(arg[i]);
  // }
  for(let val of arg) {
    console.log(val);
  }
}
jspang(0,1,2,3,4,5,6,7);
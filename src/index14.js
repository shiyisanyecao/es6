// Set 数据结构，去重
let setArr = new Set(['jspang','技术胖','web']);

setArr.add('前端职场');

setArr.delete('web');
console.log(setArr);

for(let item of setArr) {
  console.log(item);
}
console.log(setArr.size);
setArr.forEach(item => {
  console.log(item);
})

// 查找has
// console.log(setArr.has('jspang'));
console.log(setArr);

// setArr.clear();
// console.log(setArr);


let weakObj = new WeakSet();
let obj = {
  a: 'jspang',
  b: 'web'
}
let obj1 = obj;
weakObj.add(obj);
weakObj.add(obj1);

console.log(weakObj);
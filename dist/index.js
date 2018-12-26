'use strict';

// Set 数据结构，去重
var setArr = new Set(['jspang', '技术胖', 'web']);

setArr.add('前端职场');

setArr.delete('web');
console.log(setArr);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = setArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(setArr.size);
setArr.forEach(function (item) {
  console.log(item);
});

// 查找has
// console.log(setArr.has('jspang'));
console.log(setArr);

// setArr.clear();
// console.log(setArr);


var weakObj = new WeakSet();
var obj = {
  a: 'jspang',
  b: 'web'
};
var obj1 = obj;
weakObj.add(obj);
weakObj.add(obj1);

console.log(weakObj);

// function add(a,b) {
//   if(a == 0) {
//     throw new Error('A is Error');
//   }
//   return a+b;
// }
// console.log(add(0,2));

var provinces = {
  name: '江西',
  age: '12',
  sss: [
    {
      name: '南昌',
      age: '13',
      sss: [
        {
          name: 'hxj',
          age: '19',
          sss: null
        },{
          name: 'hxj',
          age: '19',
          sss: [
            {
              name: 'zij',
              age: '32',
              sss: [
                {
                  name: 'jop',
                  age: '24',
                  sss: null
                }
              ]
            }
          ]
        },{
          name: 'hxj',
          age: '19',
          sss: null
        },
      ]
    }
  ]
}
var i = 0;
function quLen(obj) {
  if(obj.name) {
    i += 1;
    return;
  }
  if(obj.sss) {
    findObj(obj.sss);
  }
}
function findObj(arr) {
  arr.forEach(item => {
    quLen(item);
  })
}
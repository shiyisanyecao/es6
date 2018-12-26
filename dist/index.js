'use strict';

var json = {
  name: 'jspang',
  skill: 'web'
};
console.log(json.name);

var map = new Map();
map.set(json, 'iam');
console.log(map);
map.set('jspang', json);
console.log(map);
map.set('skills', 'webb');
console.log(map);

console.log(map.get(json));
map.delete('skills');
console.log(map);

console.log(map.has('jspang'));

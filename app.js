'use strict';
const Immutable = require('immutable');

let json = {
  items: [
    {
      title: 'Hello',
      id: 1,
      value: 250
    },
    {
      title: 'Goodbye',
      id: 2,
      value: 125
    },
  ]
};
// let json = {
//   items: [1,2,3,4],
//   async: true,
//   title: 'Foobar'
// }
// let json = [1,2,3,4];
// let json = [
//   {
//     title: 'one',
//     id: 1
//   },
//   {
//     title: 'two',
//     id: 2
//   },
//   {
//     title: 'three',
//     id: 3
//   },
//   {
//     title: 'four',
//     id: 4
//   }
// ];

console.warn(
  Immutable.fromJS(json, function (key, value) {
    var isIndexed = Immutable.Iterable.isIndexed(value);
    return isIndexed ? value.toList() : value.toOrderedMap();
  })
);

var fields = ['name', 'gr', 'price'];
var fruits_data = [
  ["Portocale", 100, 3],
  ["Banane", 120, 4],
  ["Cocos", 55, 5]
];
var fruits = [];

function make_fruit(fdata) {
  var fruit = Object();

  fdata.forEach((field, i) => {
    fruit[fields[i]] = field;
  });

  fruits.push(fruit);
}

fruits_data.forEach(make_fruit);

console.log(fruits);

var list = Object();
list.add = function(fruit) {
  if (list.hasOwnProperty(fruit.name)) {
    this[fruit.name].gr += fruit.gr;
  }
  else {
    this[fruit.name] = Object();
    this[fruit.name].gr = fruit.gr;
  }
}

list.remove = function(fruit) {
  if (list.hasOwnProperty(fruit.name)) {
    this[fruit.name].gr -= fruit.gr;
    if (this[fruit.name].gr <= 0) {
      delete this[fruit.name];
    }
  }
}

list.add(fruits[0]);
list.add(fruits[1]);
list.add(fruits[2]);

console.log(list);

list.add(fruits[2]);

console.log(list);

list.remove(fruits[2]);

console.log(list);

list.add(fruits[1]);

console.log(list);

list.remove(fruits[0]);

console.log(list);

list.remove(fruits[0]);

console.log(list);

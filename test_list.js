var fields = ['name', 'amount', 'price'];
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
/*
var list = Object();
list.add = function(name, gr) {
  if (list.hasOwnProperty(name)) {
    this[name].gr += gr;
  }
  else {
    this[name] = Object();
    this[name].gr = gr;
  }
}

list.remove = function(name, gr) {
  if (list.hasOwnProperty(name)) {
    this[name].gr -= gr;
    if (this[name].gr <= 0) {
      delete this[name];
    }
  }
}

list.add('p', 3);
list.add('ba', 2);
list.add('p', 3);

console.log(list);

list.remove('p', 3);

console.log(list);

list.remove('ba', 2);

console.log(list);

list.remove('bs', 0);

console.log(list);

list.remove('p', 3);

console.log(list);

list.remove('ba', 2);

console.log(list);

list.remove('bs', 3);

console.log(list);
*/
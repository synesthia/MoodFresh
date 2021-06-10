var Fields = ['name', 'gr', 'price'];
var Fruits_data = [
  ["Portocale", 100, 3],
  ["Banane", 120, 4],
  ["Cocos", 55, 5]
];
var Fruits = new Map();

function make_Fruits(fruit_array) {
  var fruit = Object();
  var name;

  fruit_array.forEach((field, i) => {
    if ('name' == Fields[i]) {
      name = fruit_array[i];
    }
    else {
      fruit[Fields[i]] = field;
    }
  });

  Fruits.set(name, fruit);
}

Fruits_data.forEach(make_Fruits);

console.log(Fruits);

var List = new Map();

List.add = function(fruit_name) {
  if (List.has(fruit_name)) {
    this.get(fruit_name).gr += Fruits.get(fruit_name).gr;
  }
  else {
    this.set(fruit_name, Object());
    this.get(fruit_name).gr = Fruits.get(fruit_name).gr;
  }
}

List.remove = function(fruit_name) {
  if (List.has(fruit_name)) {
    this.get(fruit_name).gr -= Fruits.get(fruit_name).gr;
    if (this.get(fruit_name).gr <= 0) {
      this.delete(fruit_name);
    }
  }
}

List.add('Cocos');

console.log(List);

List.add('Banane');

console.log(List);

List.add('Banane');

console.log(List);

List.add('Banane');

console.log(List);

List.add('Cocos');

console.log(List);

List.remove('Cocos');

console.log(List);

List.remove('Cocos');

console.log(List);

List.remove('Cocos');

console.log(List);

List.remove('Banane');

console.log(List);

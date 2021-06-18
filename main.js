
var Key = 'name';
var Fields = [Key, 'color', 'grams', 'price'];
var Fruits_data = [
  ["Portocale", 'orange', 100, 3],
  ["Banane", '#ffe135', 100, 3],
  ["Cocos", 'white', 20, 3],
  ["Mar", '#8db600', 100, 2],
  ["Lamaie", '#fff700', 50, 2],
  ["Lime", '#bfff00', 20, 2],
  ["Kiwi", '#8ee53f', 100, 4],
  ["Ananas", '#fee88f', 100, 4],
  ["Grapefruit", '#ff6677', 100, 3],

  ["Castravete", '#8ABB55', 100, 3],
  ["Morcov", '#d74e26', 100, 3],
  ["Sfecla", '#7A1F3D', 50, 2],

  ["Spanac", '#288568', 50, 3],
  ["Kale", '#61774F', 50, 4],
  ["Menta", '#98FF98', 5, 2],
  ["Telina", '#ABB858', 100, 4],
  ["Patrunjel", 'green', 20, 2],

  ["Chia", '#847a6e', 10, 2],
  ["Scortisoara", '#C58917', 5, 2],
  ["Ghimbir", '#cd5700', 10, 2],
  ["Canepa", '#A18176', 10, 2],
  ["Turmeric", '#B19141', 5, 2]
];

make_button("Portocale");
make_button("Banane");
make_button("Cocos");

make_button("Mar");
make_button("Lamaie");
make_button("Lime");
make_button("Kiwi");
make_button("Ananas");
make_button("Grapefruit");

make_button("Castravete");
make_button("Morcov");
make_button("Sfecla");


make_button("Spanac");
make_button("Kale");
make_button("Menta");
make_button("Telina");
make_button("Patrunjel");


make_button("Chia");
make_button("Scortisoara");
make_button("Ghimbir");
make_button("Canepa");
make_button("Turmeric");

var Fruits = new Map();

function make_Fruits(fruit_array) {
  var fruit = Object();
  var name;

  fruit_array.forEach(function (field, i) {
    if (Key == Fields[i]) {
      name = fruit_array[i];
    }
    else {
      fruit[Fields[i]] = field;
    }
  });

  Fruits.set(name, fruit);
}

Fruits_data.forEach(make_Fruits);

var List = new Map();

List.add = function(fruit_name) {
  if (this.has(fruit_name)) {
    var gr = this.get(fruit_name);
    gr += Fruits.get(fruit_name).grams;
    this.set(fruit_name, gr);
  }
  else {
    this.set(fruit_name, Fruits.get(fruit_name).grams);
  }
}

List.remove = function(fruit_name) {
  if (this.has(fruit_name)) {
    var gr = this.get(fruit_name);
    gr -= Fruits.get(fruit_name).grams;
    if (gr <= 0) {
      this.delete(fruit_name);
    }
    else {
      this.set(fruit_name, gr);
    }
  }
}

function make_button(fruit) {
  var button;
  button = document.getElementById(fruit);

  button.src = fruit + '.png';

  button.onclick = function() {
    add_fruit(fruit);
  };
}

var total = 0;
var Mic = 400;
var Mare = 500; // grams

var Canvas = Object();
Canvas.elem = document.getElementById('canvas');
Canvas.h = Canvas.elem.height;
Canvas.ctx = Canvas.elem.getContext('2d');
Canvas.level = 0;
Canvas.ppgr = Canvas.h / Mare; // pixels per gram

Canvas.fill = function (color, gr, price) {
  this.ctx.fillStyle = color;
  this.ctx.fillRect(10, this.h - (this.level + gr) * this.ppgr, 100, gr * this.ppgr);
  this.level += gr;
  total += price;
}

Canvas.back = function(gr) {
  this.level -= gr;
  this.ctx.clearRect(10, this.h - (this.level+gr)*this.ppgr, 100, gr*this.ppgr);
}

var Gui = Object();
Gui.setList = function(total_sum, list_item, mililiters, total_mililiters) {
  document.getElementById('total').innerHTML = total_sum;
  document.getElementById('list_item').innerHTML = list_item;
  document.getElementById('ml').innerHTML = mililiters;
  document.getElementById('total_ml').innerHTML = total_mililiters;
}

function show_total() {
  var li = '';
  var ml = '';
  for (var [fr, gr] of List ) {
    li += fr + "<br />";
    ml += gr + ' ml.' + "<br />";
  }
  var ttml = "-------<br />";
  ttml += Canvas.level + ' ml.';

  Gui.setList(total + ' RON', li, ml, ttml);
}

function order_green() {
  document.getElementById('cmd').src = "comanda.png";
}

function order_gray() {
  document.getElementById('cmd').src = "comanda_gray.png";
}

var History = [];

function add_fruit(fruit_name) {
  if ( Canvas.level < Mare - Fruits.get(fruit_name).grams ) {
    Canvas.fill(Fruits.get(fruit_name).color, Fruits.get(fruit_name).grams, Fruits.get(fruit_name).price);

    List.add(fruit_name);
    History.push(fruit_name);

    show_total();
  }

  if ( Canvas.level >= Mic ) {
    order_green();
  }
}

function remove_fruit() {
  if (History.length <= 0) {
    return;
  }

  if ( Canvas.level > 0 ) {
    fruit_name = History.pop();

    var gr = Fruits.get(fruit_name).grams;
    Canvas.back(gr);

    List.remove(fruit_name);

    total -= Fruits.get(fruit_name).price;
    show_total();
  }
  if ( Canvas.level < Mic ) {
    order_gray();
  }
  else {
    order_green();
  }
}

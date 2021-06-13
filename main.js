const idx_img = 0;
const idx_fill = 1;
const idx_amount = 2;
const idx_mony = 3;
const idx_func_add = 4;

var Portocale = ["Portocale.png", 'orange', 100, 3, function() {add_fruit_param('Portocale');} ];
var Mar = ["Mar.png", '#8db600', 100, 2, function() {add_fruit_param('Mar');} ];
var Banane = ["Banane.png", '#ffe135', 100, 3, function() {add_fruit_param('Banane');} ];
var Lamaie = ["Lamaie.png", '#fff700', 50, 2, function() {add_fruit_param('Lamaie');} ];
var Lime = ["Lime.png", '#bfff00', 20, 2, function() {add_fruit_param('Lime');} ];
var Kiwi = ["Kiwi.png", '#8ee53f', 100, 4, function() {add_fruit_param('Kiwi');} ];
var Ananas = ["Ananas.png", '#fee88f', 100, 4, function() {add_fruit_param('Ananas');} ];
var Cocos = ["Cocos.png", 'white', 20, 3, function() {add_fruit_param('Cocos');} ];
var Grapefruit = ["Grapefruit.png", '#ff6677', 100, 3, function() {add_fruit_param('Grapefruit');} ];

//make_button("Portocale");
make_button("Mar");
make_button("Banane");
make_button("Lamaie");
make_button("Lime");
make_button("Kiwi");
make_button("Ananas");
make_button("Cocos");
make_button("Grapefruit");

var Castravete = ["Castravete.png", '#8ABB55', 100, 3, function() {add_fruit_param('Castravete');} ];
var Morcov = ["Morcov.png", '#d74e26', 100, 3, function() {add_fruit_param('Morcov');} ];
var Sfecla = ["Sfecla.png", '#7A1F3D', 50, 2, function() {add_fruit_param('Sfecla');} ];

make_button("Castravete");
make_button("Morcov");
make_button("Sfecla");

var Spanac = ["Spanac.png", '#288568', 50, 3, function() {add_fruit_param('Spanac');} ];
var Kale = ["Kale.png", '#61774F', 50, 4, function() {add_fruit_param('Kale');} ];
var Menta = ["Menta.png", '#98FF98', 5, 2, function() {add_fruit_param('Menta');} ];
var Telina = ["Telina.png", '#ABB858', 100, 4, function() {add_fruit_param('Telina');} ];
var Patrunjel = ["Patrunjel.png", 'green', 20, 2, function() {add_fruit_param('Patrunjel');} ];

make_button("Spanac");
make_button("Kale");
make_button("Menta");
make_button("Telina");
make_button("Patrunjel");

var Chia = ["Chia.png", '#847a6e', 10, 2, function() {add_fruit_param('Chia');} ];
var Scortisoara = ["Scortisoara.png", '#C58917', 5, 2, function() {add_fruit_param('Scortisoara');} ];
var Ghimbir = ["Ghimbir.png", '#cd5700', 10, 2, function() {add_fruit_param('Ghimbir');} ];
var Canepa = ["Canepa.png", '#A18176', 10, 2, function() {add_fruit_param('Canepa');} ];
var Turmeric = ["Turmeric.png", '#B19141', 5, 2, function() {add_fruit_param('Turmeric');} ];

make_button("Chia");
make_button("Scortisoara");
make_button("Ghimbir");
make_button("Canepa");
make_button("Turmeric");

var Key = 'name';
var Fields = [Key, 'color', 'grams', 'price'];
var Fruits_data = [
  ["Portocale", 'orange', 100, 3],
  ["Banane", '#ffe135', 100, 3],
  ["Cocos", 'white', 20, 3]
];

var Fruits = new Map();

function make_Fruits(fruit_array) {
  var fruit = Object();
  var name;

  fruit_array.forEach((field, i) => {
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

make_btn("Portocale");

function make_btn(fruit) {
  var button;
  button = document.getElementById(fruit);

  button.src = fruit + '.png';

  button.onclick = function() {
    add_fruit_param(fruit);
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

var ingredients = [];

var List = Object();

List.add = function(name, gr, price) {
  if (List.hasOwnProperty(name)) {
    this[name] += 3;
  }
  else {
    this[name] = 3;
  }
}

List.remove = function(name) {
  if (List.hasOwnProperty(name)) {
    this[name] -= 3;
    if (this[name] <= 0) {
      delete this[name];
    }
  }
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
  for (i = 0; i < ingredients.length; i += 3) {
    li += ingredients[i] + "<br />";
    ml += ingredients[i+1] + ' ml.' + "<br />";
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

function add_fruit(name, fill, gr, price) {
  if ( Canvas.level < Mare - gr ) {
    Canvas.ctx.fillStyle = fill;
    Canvas.ctx.fillRect(10, Canvas.h - (Canvas.level+gr)*Canvas.ppgr, 100, gr*Canvas.ppgr);
    Canvas.level += gr;
    total += price;

    ingredients.push(name);
    ingredients.push(gr);
    ingredients.push(price);

    show_total();
  }

  if ( Canvas.level >= Mic ) {
    order_green();
  }
}

function remove_fruit() {
  if ( Canvas.level > 0 ) {
    price = ingredients.pop();
    gr = ingredients.pop();
    name = ingredients.pop();
    Canvas.level -= gr;
    Canvas.ctx.clearRect(10, Canvas.h - (Canvas.level+gr)*Canvas.ppgr, 100, gr*Canvas.ppgr);
    total -= price;
    show_total();
  }
  if ( Canvas.level < Mic ) {
    order_gray();
  }
  else {
    order_green();
  }
}

function make_button(fruit) {
  var button;
  button = document.getElementById(fruit);
  var f_arr = eval(fruit);
  button.src = f_arr[idx_img];
  button.onclick = f_arr[idx_func_add];
}

function add_fruit_param(fruit_name) {
  var fruit = eval(fruit_name);
  //add_fruit(Object.keys({fruit})[0], fruit[idx_fill], fruit[idx_amount], fruit[idx_mony]);
  add_fruit(fruit_name, fruit[idx_fill], fruit[idx_amount], fruit[idx_mony]);
}

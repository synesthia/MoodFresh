Fruits = new Map();

Fruits.set('portocale', {'gr': 100, 'price':3});

console.log(Fruits.get('portocale').gr);

fr = Object();

fr['portocale'] = {'gr': 100, 'price':3};

console.log(fr['portocale'].gr);

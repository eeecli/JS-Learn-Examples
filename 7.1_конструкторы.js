//https://habr.com/ru/post/111393/#comment_3555912
//https://habr.com/ru/post/111393/#comment_3553655

//класс - возможность генерировать и классифицировать

var point = {x: 1, y: 2};

var a = {x: 1, y: 2, z: 1};
var b = {x: 3, y: 4, z:2};
var c = {x: 5, y: 6};


/////// правило двух» — «если код повторяется больше двух раз, вынеси (инкапсулируй) его в функцию
//Генеретор объектов
function makePoint(x, y) {
  return {
    x: x,
    y: y,
    z: z
  };
}

var a = makePoint(1, 2);
var b = makePoint(3, 4);
var c = makePoint(5, 6);

a === b

//Классификатор объектов
var proto = {};
proto['constructor'] = makePoint

makePoint['prototype'] = proto

makePoint.prototype = {
  constructor: makePoint
};

function makePoint(x, y) {
  return {
    __proto__: makePoint.prototype,
    x: x,
    y: y
  };
}

var a = makePoint(1, 2);
var b = makePoint(3, 4);

a.__proto__ === makePoint.prototype
b.__proto__ === makePoint.prototype

a instanceof makePoint

//Наследование
//Должны как то указать ссылку на Point3D => makePoint
makePoint3D.prototype = {
  constructor: makePoint3D
};

///
var parent = {};
parent.__proto__ = makePoint.prototype

makePoint3D.prototype.constructor = makePoint3D
makePoint3D.prototype = parent;
//перетерли constructor
makePoint3D.prototype.constructor = makePoint3D

makePoint3D.prototype = {
  __proto__: makePoint.prototype,
  constructor: makePoint3D
}

function makePoint3D(x, y, z) {
  debugger;
  var superclassConstr = Object.getPrototypeOf(makePoint3D.prototype).constructor;
  superclassConstr = makePoint.prototype.constructor
  var newObj = superclassConstr(x, y);
  newObj.__proto__ = makePoint3D.prototype;
  newObj.z = z; 
  return newObj;
}


//почему не сработает?
Object.assign(newObj, {
  __proto__: makePoint3D.prototype,
  z: z,
});

var o = Object.defineProperty({}, 'Prop', {
  value: 'default',
  enumerable: false
});
var newO = {}
Object.assign(newO, o);

//синтаксический сахар
function test(){}
console.log(test.prototype)

//1й этап - prototype
/*
makePoint.prototype = {
  constructor: makePoint
};
*/
function makePoint(x, y) {
  return {
    __proto__: makePoint.prototype,
    x: x,
    y: y
  };
}

//2й этап - контекст
function makePoint(x, y){
  this.x = x;
  this.y = y;
}

var o = {};
makePoint.call(o, 1, 4);
o.__proto__ = makePoint.prototype

//3q этап - new
function makePoint(x, y){
  this.x = x;
  this.y = y;
}

var a = new makePoint(1, 2);
var b = new makePoint(3, 4);

a.__proto__ === b.__proto__ && a.__proto__ === makePoint.prototype //!!!!!!!!!!!!!!!

makePoint.prototype.toString = function(){
  return `x - ${this.x}, y - ${this.y}`
}
a.toString();

////цепочка прототипов
function makePoint(x, y){
  this.x = x;
  this.y = y;
}

makePoint.prototype.toString = function(){

  var getValue = (propName) => this[propName]

  return `prototype: x - ${getValue('x')}, y - ${getValue('y')}`
}

var p = new makePoint(1,2)

makePoint.prototype.Prop = { PropnName: 'PropValue'}

var a = new makePoint(1, 2);
var b = new makePoint(3, 4);

a.toString() //подняти и контекст

////Сахар для наследования
makePoint3D.prototype = {
  __proto__: makePoint.prototype,
  constructor: makePoint3D
}

function makePoint3D(x, y, z) {
  var superclassConstr = Object.getPrototypeOf(makePoint3D.prototype).constructor;
  var newObj = superclassConstr(x, y);
  newObj.__proto__ = makePoint3D.prototype;
  newObj.z = z; 
  return newObj;
}

///Перепишем с учетом new
makePoint3D.prototype = {
  __proto__: makePoint.prototype,
  constructor: makePoint3D
}

function makePoint3D(x, y, z) {
  var superclassConstr = Object.getPrototypeOf(makePoint3D.prototype).constructor;
  //makePoint3D.prototype.__proto__.FunctionName()
  //this.__proto__.__proto__.FunctionName()
  superclassConstr.call(this, x, y);

  this.z = z;
}

//работа с прототипом
makePoint3D.prototype = {
  __proto__: makePoint.prototype,
  constructor: makePoint3D,
  superclass: makePoint.prototype
}

function makePoint3D(x, y, z) {
  makePoint3D.prototype.superclass.constructor.apply(this, arguments);
  this.z = z;
}

makePoint3D.prototype.toString = function(){
  makePoint3D.prototype.superclass.toString();
}

//если код повторяется больше двух раз, вынеси (инкапсулируй) его в функцию
function Extend(parent, child){
  parent.prototype = {
    __proto__: child.prototype,
    constructor: parent,
    superclass: child.prototype
  }
}

function makePoint3D(x, y, z) {
  makePoint3D.prototype.superclass.constructor.apply(this, arguments);
  this.z = z;
}
Extend(makePoint3D, makePoint);

//

////1
var parent = {};
parent.__proto__ = makePoint.prototype

////2
var parent = Object.create(makePoint.prototype, {})

function Temp() {}
Temp.prototype = makePoint.prototype
var obj = new Temp()
/*
var obj = {};
//Temp.call(obj);
obj.__proto__ = Temp.prototype
*/
Temp.prototype = null

//Совсем корректная версия Extend
function Extend(parent, child){
  function Temp() {};
  Temp.prototype = child.prototype;
  var obj = new Temp();
  Temp.prototype = null
  //var obj = Object.create(child.prototype)

  parent.prototype = obj;
  parent.prototype.constructor = parent
  parent.prototype.superclass = child.prototype
}


function Extend(parent, child){
  function Temp() {};
  Temp.prototype = child.prototype;
  var obj = new Temp();
  Temp.prototype = null

  parent.prototype = obj;
  parent.prototype.constructor = parent
  parent.prototype.superclass = child.prototype
}


//добавляем конструктор
var parent = Object.create(makePoint.prototype);
parent.constructor = makePoint3D;


////

var base = {
  SomeProp: 'SomeValue',
  Func(){
    console.log('base func', this);
  },
  get PropGetter(){
    console.log('base PropGetter');
    return 'GetterVal'
  }
}


///Chrome 41
var base = {
  SomeProp: 'SomeValue',
  Func: function(){ //////////
    console.log('base func', this);
  },
  get PropGetter(){
    console.log('base PropGetter');
    return 'GetterVal'
  }
}

//////

var parent = Object.create(base, {
  NewProp: {
    enumerable: true,
    value: 'NewValue'
  }
})


//
var parent = {};
parent = Object.defineProperties(parent /*{}*/, {
  NewProp: {
    enumerable: true,
    value: 'NewValue'
  },
  Func: {
    enumerable: false,
    value: function(){
      console.log('parent func', this);
    }
  }
})
undefined
parent.__proto__ = base


var grandParent = Object.create(parent, {
  NewProp: {
    enumerable: false,
    value: 'SuperNewValue'
  }
})

base.isPrototypeOf(grandParent)
grandParent.__proto__.__proto__ === base


grandParent['SomeProp'] = 234234

///Примеры
Object.create( null );

var o = {};
o.__proto__ = null; //undefined???


var arrayProto = Array.prototype
var parentArray = Object.create(arrayProto)

parentArray.push = function(...arg){
  console.log('new push', arg);
  Array.prototype.push.apply(this, arg) //Array.prototype.push(arg)
}

var arr = [1, 2]
arr.__proto__ = parentArray
arr.push(4)


function People(){

}

let p = new People();

////контекст

function People(){
  this.Name = 'Vasya';
  this.Age = 10;
}

let p = new People();

p instanceof People;


////
var obj = {};
var p = People.call(obj);
p.__proto__ = People.prototype

/////

function People(){
  this.Name = 'Vasya';
  this.Age = 10;

  this.getName = function(){
    return this.Name
  }

  setTimeout(()=>{
    console.log(`Стрелочная - `, this);
  }, 1000)

  setTimeout(function(){
    console.log(`Обычная - `, this);
  }, 1500)
}

let p1 = new People()
let p2 = new People()

p1.getName == p2.getName


////


/////
var parentArray = new Array()
parentArray.push = function(...arg){
  console.log('Func push', ...arg);
  Array.prototype.push.apply(this, arg)
}

var arr = [1,2]
arr.__proto__ = parentArray;
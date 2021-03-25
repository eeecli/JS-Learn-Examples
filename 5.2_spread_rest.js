//Spread
let arr = [1, 2, 3]

function Get(x, y, z){
  console.log(`x - ${x}, y - ${y}, z - ${z}`)
}

Get(...arr) // Get(1, 2, 3)
Get.apply(null, arr)


new Get(...arr)

///Rest Parameter

function get(arg1, arg2, ...other){
  console.log(arg1)
  console.log(arg2)
  console.log(other)
}

get(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

////

function get([name, val]){
  console.log(`Name - ${name}, val - ${val}`)
}

get(['Vasya', '30'])

//Пример
var o = {
  Name: 'Vasya',
  Age: 30
}

Object.entries(o).forEach(([key, val]) => {
  console.log(`Key - ${key}, val - ${val}`);
})

////
var o = {
  Name: 'Vasya',
  Age: 10,
  Size: {
    Width: 10,
    Height: 100,
  }
}

function get(obj){
  
  console.log(`Name - ${Name}, Width - ${Width}`)
}

get(o)


/////
get()

function get2({Name = 'Empty'}){
  console.log(`Name - ${Name}`)
}

function get3(arg){
  const {Name} = arg || {}
  console.log(`Name - ${Name}`)
}

get2('')
get3()

////

var arr2 = [5, ...arr, 4, ...[6, 7]]
//Любой итератор -> массив

function* getIter(){
  yield 1;
  yield 2;
  yield 4;
  yield '1';
}

var arr = [5, 6, 7];
var iter1 = getIter();
var iter2 = arr.entries();
var iter3 = arr.keys();

var newArr = [...arr, ...iter1, ...iter2, ...iter3]

///
var o = {
  Name: 'Vasya',
  Age: 10,
  Size: {
    Width: 10,
    Height: 100,
  }
}

o2 = {...o, Name: 'Petya'}
o3 = {...o, Age: 15}
o4 = {...o,
      Age: 15,
      Size: {
        ...o.Size,
        Width: 1
      }}

var propName = 'Size3'
function getPropName(){return 'newProp'}
o5 = {...o,
      Age: 15,
      [getPropName()]: {
        Width: 1
      }}

o[propName] = {Width: 1}
//////
//Объявление
let Name = 'Petya',
    Age = 15;

let o = {Name, Age};

//Изменение
Name = 'Vasya';
var o2 = {...o, Name}
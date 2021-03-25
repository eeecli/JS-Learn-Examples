//Array.isArray
Array.isArray([])
Array.isArray(1)

//concat 
var arr = [1, 2, 3, 4, {}, [1,2,34]];
var newArr = arr.concat([5, 6])

console.log(arr, newArr)

newArr[0] = 'sdf'
newArr[4]['NewProp'] = 'NewValue'

arr.concat() //копирование

//copyWithin ???????

var arr = [1, 2, 3, 4, 'a', 'b', 'c']
arr.copyWithin(0, -3, -1)
arr.copyWithin(0, -3)
arr.copyWithin(-2, 0, 2)

//entries, keys, values (итераторы)
var arr = ['a', 'b']
for(var item of arr.entries()){
  console.log(`Key - ${item[0]}, Value - ${item[1]}`)
}

for(var [i, v] of arr.entries()){
  console.log(`Key - ${i}, Value - ${v}`)
}

//every
var arr = [1, 2, 3, 4]
arr.every(el => el % 2 == 0)

var arr = [2, 4]
arr.every(el => el % 2 == 0)

//fill ???????

var arr = [1, 2, 3, 4]
arr.fill({});

arr[0]['NewProp'] = 'NewVal'

//filter -> array, find -> element, findIndex -> index
var arr = ['a', 'b']
var obj = {charFind: 'a'}
arr.filter((element, index, arr) => element === 'a')

arr.filter(function(element){
  return element == this.charFind;
}, obj)

//indexOf, lastIndexOf
var arr = ['a', 'a', 'a']
arr.indexOf({});
arr.lastIndexOf('a');

~arr.indexOf('a') ? true : false

//forEach
var arr = ['a', 'b']
arr.forEach(el => console.log(el))

arr.forEach(function(el){
  console.log(el)
})

var obj = {Name: 'Vasya', Age: '5'}
Object.keys(obj).forEach(function(key){
  console.log(key)
})

//
Object.prototype.test = function(){}
Object.keys(obj).forEach(function(key){
  console.log(key)
})

for(var key in obj){
  console.log(key)
}

//join, split

var str = 'Hello World';
arr = str.split(' ')
arr.join(', ')

//map
var arr = [1, 2, 3, 4, 5]

arr.map(el => `${el} - ${el % 2 === 0}`)

//push, pop, unshift, shift

function initArr(){
  var arr = [1, 2];
  return function(){
    return arr;
  }
}

var getArr = initArr();
var arr = getArr();
arr.push(4, 5);

Array.prototype.push.apply(arr, [10, 11]);
arr.push(...[1, 2, 3])

arr.pop();
while(arr.pop()){
}

arr.unshift(1, 2);
arr.unshift(3, 4);

arr.shift()


//reduce
var arr = [1, 2]
var obj = {charFind: 'a', Trash: 'dfdf'}

arr.reduce((acc, el) => el.Width + acc, 0)

Object.keys(obj).reduce((acc, key) => {
  if(key[0] === key[0].toLowerCase()){
    acc[key] = obj[key];
  }
  return acc
}, {})


//Array.from -> Array

Array.from([1, 2, 'b'].values())

//slice, splice
var arr = [1, 2, 3, 4, 5]
arr.slice(1, 3)
arr.slice(-3, -1)

arr.splice(3, 1, '3')
arr.splice(4, 0, '4')

//перестановка
var arr = [0, 1, 'left', 3, 4, 'right', 6]
var source = 2;
var target = 5
arr[source] = arr.splice(target, 1, arr[source])[0]

arr.splice(target, 1, arr[source])
[0, 1, 'left', 3, 4, 'left', 6]
arr[2] = 'source'



//Мутабельные (изменяющие массив) методы
push
unshift
pop
shift
fill
splice
copyWithin
reverse
sort
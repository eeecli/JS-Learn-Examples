//Функции генераторы (function*) и yield


function* iterator(){
    console.log('start');
  yield 1;
    console.log('yield 1 -> 10');
  yield 10;
    console.log('yield 10 -> 2');
  yield 2;
    console.log('yield 2 -> 20');
  yield 20;
  yield 20;
    console.log('end');
}

let iter = iterator();

iter.next();
iter.next();

////

var fail = () => {
  yield 1;
  yield 2;
}


//// Example

let iter_count = 0;
function* getCharArr_Iter(){
  for(let x = 0; x < 256; x ++){
    iter_count++;
    yield String.fromCharCode(x);
  }
}


let count = 0;
function getCharArr(){
  let arr = []
  for(let x = 0; x < 256; x ++){
    count++;
    arr.push(String.fromCharCode(x));
  }

  return arr;
}

let charFind = ' ';

let iter = getCharArr_Iter();
let resIter;

///1
while(true){
  resIter = iter.next();
  if(resIter.done){
    break;
  }
  if(resIter.value === charFind){
    console.log(`Yield Iteration - ${iter_count}`);
  }
}

///2
for(resIter of getCharArr_Iter()){
  if(resIter === charFind){
    console.log(`Yield Iteration - ${iter_count}`);
    break;
  }
}

///3
[...getCharArr_Iter()]
Array.from(getCharArr_Iter())


let charRes = getCharArr();
let resArr = charRes.find(el =>{
  count++;
  if(el === charFind){
    console.log(`Array Itertion - ${count}`)
    return true
  }

  return false
})

//////////

var obj = {
  [Symbol.iterator]: function* (){
    for(let x = 0; x < 256; x ++){
      yield String.fromCharCode(x);
    }
  }
}

var obj = { Prop: 'Val'}
obj[Symbol.iterator]= function* (){
  for(var x = 0; x < 1024000000; x ++){
    yield String.fromCharCode(x);
  }
}

for(var s of obj){
  console.log(s);
  if(s === '2'){
    break;
  }
}

//

Array.prototype.even = function*(){
  for(var el in this){
    this[el] % 2 === 0 && (yield this[el]);
  }
}

var evArr = [1, 2, 3, 4];
var evRes = evArr.even();
for(var arr of evRes){
  console.log(arr)
}


for(var arr of evRes){
  console.log(arr) //???????
}
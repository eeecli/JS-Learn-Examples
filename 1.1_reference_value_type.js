///иммутабельные (неизменные), примитивные типы
//https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/

Boolean;
Number;
String; //Копирование
Symbol;

var str = 'str';
var num = 1;
var b = false;
var sym = Symbol('Symbol')

function ChangeVar(str, num, b, sym){
  str += 'n';
  num += 1;
  b = true;
  sym = Symbol('New symbol')
  console.log(`changeVar
  str = ${str}
  num = ${num}
  b = ${b}
  sym = ${String(sym)}`)
}
ChangeVar(str, num, b, sym)

console.log(`mainVar
  str = ${str}
  num = ${num}
  b = ${b}
  sym = ${String(sym)}`)

//Alocation timeline
var str = '2'
for(var i = 0; i < 15; i++){
  str+=str
}

var q = str;
str = 's' + str;
q = 'q' + q;



///Ссылочные типы (объекты)

var obj = {
  str: 's',
  b: false,
};

var arr = ['s', false, 1]

function changeVar(nObj, nArr){
  nObj.str += 'n';
  nObj.newProp = 'fdfdf';
  nArr[0] += 'q';
  nArr[1] = true;
  nArr[2] += 1;
  nArr.push('newString');
  console.log('changeVar', nObj, nArr)
}

changeVar(obj, arr)

console.log('mainVar', obj, arr)

//Сравнение

var obj = {
  str: 's',
  b: false,
};

var obj2 = {
  str: 's',
  b: false,
};

obj === obj2 ? true : false;

obj2 = obj;
obj === obj2 ? true : false;
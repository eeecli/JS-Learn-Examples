//Conditional / Условный / Тернарный

import { indexOf } from "core-js/fn/array";

var left = 10,
    right = 20;

var res = left === right ? 'Success' : 'Fail';
var resStr = `Result = ${left === right ? 'Success' : 'Fail'}`;

var failRes = 'Result = ' + left === right ? 'Success' : 'Fail';
var failRes2 = 'Result = ' + (left === right) ? 'Success' : 'Fail';

var succcessRes = 'Result = ' + (left === right ? 'Success' : 'Fail')

//Оператор || и &&

var obj = {Name: 'Vasya'};
var objUndef;

var res1 = obj && obj.Name; // if
var res2 = objUndef || {};
var resTernarTrue = left === right && 'Success';
var resTernarFalse = left === right || 'Fail';

var resMulti = true && false || 'Finish'
var example = objUndef && objUndef.Name || 'No name'

obj = false;
obj && alert(obj.Name);

//Example PW
var propSet = {
  GetProperty_1: () => undefined,
  GetProperty_2: () => 'df',
  GetProperty_3: () => 'y'
}
var control = {
  GetPMPropSet_1: () => undefined,
  GetPMPropSet_2: () => propSet
}


function Old(control){
  var propVal;
  if(control.GetPMPropSet()){
    propVal = control.GetPMPropSet().GetProperty("DisplayAsButton");
    if(!propVal){
      propVal = '';
    }
    return propVal.toLowerCase() === 'y'
  }

  return false;
}

function New(control){
  return (
            control.GetPMPropSet() 
          && control.GetPMPropSet().GetProperty("DisplayAsButton") 
          || ''
        ).toLowerCase() === 'y';
}

/////Тильда

var res = ~(-1) ? true : false;

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

11111111111111111111111111111111

00000000000000000000000000000010
11111111111111111111111111111101

dec2bin(-1)
dec2bin(8)
dec2bin(~8)
dec2bin(-9)

var arr = [1, 3, 4];
indexOf('df') >= 0
~arr.indexOf(4) ? true : false;

//replace
//https://regex101.com/
//https://cheatography.com/davechild/cheat-sheets/regular-expressions/

var obj = {
  FirstName: 'Robert',
  Age: 40,
  LastName: 'Paulson'
}
var str = 'His name is ${FirstName} ${LastName}'
str.replace('Hi', 'rt')

var res = str.replace(/\${([^{}]+)/g, function(match, grp1, grp2){
  return obj[grp1];
})


var str = 'qweqwe';
str.replace('qw', 'as')
str.replace(/qw/, 'as')
str.replace(/qw/g, 'as')

//Дата

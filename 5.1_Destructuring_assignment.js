///Деструктурирующее присваивание

var [one, two] = [1, undefined,4,5,6,7,8,9]

var [one, ,two] = (function(){
  return [1, 3, 4]
})()

//

var o = {
  Name: 'Vasya',
  Age: 10,
}

var {Age, age, ageDef = 'Default'} = o


var {Name: nameFunc, Age: ageFunc} = (function(){
  return o
})()

//вложенные

var o = {
  Name: 'Vasya',
  Age: 10,
  Size: {
    Width: 10,
    Height: 100,
  }
}

var {Name: n, Size:{Width: w}} = o
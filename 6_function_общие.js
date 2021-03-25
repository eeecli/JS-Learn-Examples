//Объявление
function showMessage() {
  alert('Всем привет!');
}
  
let showMessage2 = function() {
  alert('Всем привет!');
}

   
//Стрелочные функции ES6
let showMessage3 = () => {
  alert('Всем привет!');
}
  

let showMessage4 = (arg) => alert(arg, 'Всем привет!');

function thatFunc(){
  console.log('thatFunc', this)
  function test(){
    var subFunc = () => {
      console.log('subFunc', this)
    }
    console.log('test', this)
    subFunc()
  }
  test()
}

//this, arguments

var o1 = {
  Name: 'Vasya',
  Age: 10,
  getThis: () => this,
}

var o2 = {
  Name: 'Vasya',
  Age: 10,
  getThis: function(){
    return this;
  },
}

o1.getThis();
o2.getThis();

o1.getThis.call(window);
o1.getThis.call(o1);

o2.getThis.call(window);
o2.getThis.call(o2);


function callBack(){
  console.log(this.Prop)
}

function Test(){
  var that = this;
  var a = 'df'
  var n = 2
  setTimeout(
      function(){
        callBack.call(that)
      }
      , 1000
  )
}

//bind
function test(){
  console.log(this);
  console.log([...arguments].join(', '));
}

var context = {
  Prop:'Val'
};

test('a', 2, {}, -1)
var bTest = test.bind(context, 'a', 2, {}, -1);

bTest();
bTest(3, 4, 5, 6, 7)

//Пример
var context = {
  Prop:'Val'
};

function processing(){
  console.log(this)
}

setTimeout(function(){
  processing.call(context);
}, 1000)

setTimeout(processing.bind(context), 2000)


var obj = {
  FirstName: 'FirstName',
  LastName: 'LastNameam',
  FullName(obj){
    return obj.FirstName + ' ' + obj.LastName
  }
}






//Замыкание
(function(){
  alert('Всем привет!')
})()



//пример
[1, 2, 3, 4].find(function(el, i){
  return i == 1;
})

[1, 2, 3, 4].find((el, i) => {
  return i == 1;
})

[1, 2, 3, 4].find((el, i) => i == 1)
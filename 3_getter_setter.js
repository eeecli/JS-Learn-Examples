let o = {
  Width: 10,
  Height: 100,
  SquareFunc: function(){return 20;},
  get Square(){
    return this.Width * this.Height;
  },
  set Square(val){
    this.Width = val / this.Height
  }
}

/////

function Test(){
  this.Width = 10;
  this.Height = 1000
}

Test.prototype.Before = function(){}

Test.prototype = {
  get Square(){
    return this.Width * this.Height;
  },
  set Square(val){
    this.Width = val / this.Height
  }
}

Test.prototype.After = function(){}

///

let o = {
  Width: 10,
  Height: 100,
}

///

Object.defineProperty(o, 'Square', {
  get: function(){
    return this.Width * this.Height;
  },
  set: function(val){
    this.Width = val / this.Height
  }
})

Object.defineProperties(Test.prototype, {
  'ComputedWord': {
    get: function() {
      return 'Computed' + this.Word;
    }
  }
});
//

o.__defineGetter__('Square', function(){
  return this.Width * this.Height;
})

o.__defineSetter__('Square', function(val){
  this.Width = val / this.Height
})

//


var o = { Prop: 'Val'}
o.func = function(arg){
  console.log('func ', arg, this);
  return 'Val';
}

closureFunc(o, 'func', callbackFunc);

function callbackFunc(arg){
  console.log('callbackFunc ', arg, this);
}

function closureFunc(o, key, callback){
  var oldFunc = o[key]
  o[key] = function(){
    console.log('Wrapper func');
    callback.apply(o, arguments);
    return oldFunc.apply(o, arguments)
  }
}

///////

var o = { Prop: 'Val'}
o.func = function(arg){
  console.log('func ', arg, this);
  return 'Val';
}

var symFunc = Symbol('old_func')
o[symFunc] = o.func;
o.func = function(arg){
  console.log('callbackFunc ', arg, this);
  return o[symFunc].apply(o, arguments)
}


//по ключу
function observe(obj, key){
  if(typeof obj !== 'object' || !key){
    return obj;
  }

  let val = obj[key];
  Object.defineProperty(obj, key, {
    get(){
      console.log(`Get - ${key}`)
      return val;
    },
    set(newVal){
      console.log(`Set - ${key}`)
      val = newVal;
    }
  })

  return obj;
}


//все свойства
function observe(obj){
  if(typeof obj !== 'object'){
    return obj;
  }
  Object.keys(obj).forEach((key) => {
    let val = observe(obj[key]);
    Object.defineProperty(obj, key, {
      get(){
        console.log(`Get - ${key}`)
        return val;
      },
      set(newVal){
        console.log(`Set - ${key}`)
        val = newVal;
      }
    })
  })

  return obj;
}
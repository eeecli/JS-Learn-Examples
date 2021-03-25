//hasOwnProperty (собственные свойства)
var obj = {}
obj['PropName'] = 'PropValue';
obj.hasOwnProperty('PropName');
obj.hasOwnProperty('toString');
obj.hasOwnProperty('hasOwnProperty');

//toString, toLocaleString (переопределяется в наследниках)
[].toLocaleString()
({}).toLocaleString()

options = {
  timeZone: 'UTC',
  timeZoneName: 'short',
}
date = new Date();
date.toLocaleString('en-US', options);

//assign
var obj1 = {Prop: 'Val'}
var obj2 = {Prop2: 'Val2', Child: { ChildProp: 'ChildVal'}}
var o = {};
Object.assign(obj1 , obj2)

obj2.Child.ChildProp += '2'
obj1.Prop2 += '3'

JSON.parse(JSON.stringify(obj))

//defineProperty, defineProperties
var obj = {Prop: 'Val'}
Object.defineProperties(obj, {
  'SmartPropRO':{
    'value': 'default',
    'writable': false
  },
  'SmartAccessor':{
    'get': function(){
      console.log('Run getter SmartAccessor');
      return this.SmartPropRO + '_Sufix';
    },
    'set': function(val){
      console.log('Run setter SmartAccessor');
      this.SmartPropRO = val;
      this.Prop = val;
    }
  }
})

Object.defineProperty(obj, 'SingleSmartProp', {
    'value': 'default',
    'writable': true
  });
  
Object.defineProperty(obj, 'SingleEnum', {
    'value': 'default',
    'writable': true,
    'enumerable':true
  })


//Cannot both specify accessors and a value or writable attribute


//getOwnPropertyDescriptor, getOwnPropertyDescriptors
Object.getOwnPropertyDescriptor(obj, 'SmartAccessor');

Object.getOwnPropertyDescriptors(obj)

//getOwnPropertyNames vs keys, getOwnPropertySymbols

var sym = Symbol('Test Symbol')
obj[sym] = 'symbol data'
Object.prototype.testFunc = ()=>{}


Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols(obj)

Object.keys(obj)
for(var k in obj){console.log(k)}

JSON.stringify(obj)

//freeze, seal, preventExtensions
function getObject(){
  var obj = {Prop: 'Val'}
  Object.defineProperties(obj, {
    'SmartPropRO':{
      'value': 'default',
      'writable': false
    },
    'SmartAccessor':{
      'get': function(){
        console.log('Run getter SmartAccessor');
        return this.SmartPropRO + '_Sufix';
      },
      'set': function(val){
        console.log('Run setter SmartAccessor');
        this.SmartPropRO = val;
        this.Prop = val;
      }
    }
  })

  Object.defineProperty(obj, 'SingleSmartProp', {
      'value': 'default',
      'writable': true
    });
    
  Object.defineProperty(obj, 'SingleEnum', {
      'value': 'default',
      'writable': true,
      'enumerable':true
    })
  
  obj['Child'] = {ChildProp: 'ChildVal'}

  return obj;
}

Object.seal(obj)

Object.preventExtensions(obj)

Object.freeze(obj)


/*-  -  -*/  obj.__proto__ = Array.prototype
/*-  +  -*/  Object.defineProperty(obj, 'Prop', {'get': function(){console.log('New Get')}})
/*+  +  -*/  obj.Prop = 2
/*+  +  -*/  obj.SmartAccessor = 'new Value'
/*-  -  -*/  obj.NewProp = '111111'
/*-  +  -*/  delete obj.Prop

//isSealed, isExtensible, isFrozen
Object.isSealed(obj)
Object.isExtensible(obj)
Object.isFrozen(obj)

//entries, keys, values, fromEntries

var obj = {Prop: 'Val', Prop2: 'Val2'}
var arr = Object.entries(obj);
Object.fromEntries(arr)

//is

Object.is(0, '')
Object.is(NaN, NaN)
Object.is(0, -0)


/////////
Object.defineProperties(obj, {
  SmartPropRO: {
    value: 'default',
    writable: false
  },
  SmartAccessor: {
    get(){
      console.log('Run getter SmartAccessor');
      return this.SmartPropRO + '_Sufix';
    },
    set(val){
      console.log('Run setter SmartAccessor');
      this.SmartPropRO = val;
      this.Prop = val;
    }
  }
})

//Object.create

//isPrototypeOf
var superProto = {
  // some super properties
}



var subProto = Object.create(superProto);
subProto.someProp = 5;

var sub = Object.create(subProto);

console.log(superProto.isPrototypeOf(sub));  // true
console.log(sub instanceof superProto);


propertyIsEnumerable

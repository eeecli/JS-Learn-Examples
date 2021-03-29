function People(){
  this.Name = 'Vasya';
  this.Age = 10;
  this.ContextData = {
    check: 1
  }
}

People.prototype.getName = function(){
  return this.Name
}

People.prototype.getArrow = () => {
  return this
}

let p1 = new People()
let p2 = new People()

p1.getName == p2.getName

var i = 0;

function isEmptyte(str){
  return str == ''
}
/*
0
isEmptyte(++i) 1
%
*/
////



/////
p1.__proto__ === People.prototype

//////
People.prototype.data = {
  check: 1
}

p1.data.check
p2.data.check = 2
p1.data.check

//Наследование
function Extend(target, base) {
  var temp = function() {};
  temp.prototype = base.prototype;
  target.prototype = new temp;
  target.prototype.constructor = target;
  target.superclass = base.prototype;
}

function Main(){
  Main.superclass.constructor.apply(this, arguments);
  this.NewProp = 'Value';
}


/////siebel
//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=TestApplet&userprops=&comments=No&logging=No
if (typeof(SiebelAppFacade.TestAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.TestAppletPR");
  define("siebel/custom/TestAppletPR", ["siebel/phyrenderer"],
   function () {
    SiebelAppFacade.TestAppletPR = (function () {
 
     function TestAppletPR(pm) {
      SiebelAppFacade.TestAppletPR.superclass.constructor.apply(this, arguments);
     }

    SiebelJS.Extend(TestAppletPR, SiebelAppFacade.PhysicalRenderer);
 
 
     TestAppletPR.prototype.Init = function () {
      SiebelAppFacade.TestAppletPR.superclass.Init.apply(this, arguments);
     }
 


     return TestAppletPR;
    }()
   );
   return "SiebelAppFacade.TestAppletPR";
  })
 }
 
 

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



 //Бонус

 var obj = {length:5, 2:'33434'}
 obj.__proto__ = Array.prototype

 obj instanceof Array

 Array.isArray(obj) //???
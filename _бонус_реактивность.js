///Старт

var price = 100;
var quantity = 5;
var total = price * quantity;
console.log(total)

quantity = 1
console.log(total)


///expression -> function

var target = function(){
  total = price * quantity
}

target()

//хранение функций

var storage = [];
function record (func) {
    storage.push(func)
}

function replay () {
  storage.forEach(function(func){
    func();
  })
}

record(target);

console.log(total)
quantity = 20;
replay()
console.log(total)

///Промежуточный итог

let price = 5
let quantity = 2
let total = 0

let target = null
let storage = []

function record (func) {
    storage.push(func)
}

function replay () {
    storage.forEach(run => run())
}

target = function(){
  total = price * quantity
}

record(target)
target()

price = 20
console.log(total)
replay()
console.log(total)

///Дорабатываем хранение функций

function Dep(){ // Dep - это сокращение от Dependency
  this.subscribers = [];
}

Dep.prototype.depend = function(func){ // замена функции record
  if (func && !this.subscribers.includes(func)){ //includes -> indexOf без тильды
      // только если есть target и этой функции ещё нет
      // в числе подписчиков на изменения
      this.subscribers.push(func)
  }
}

Dep.prototype.notify = function(){ // замена функции replay
  this.subscribers.forEach(sub => sub())
  // запуск функций-подписчиков или наблюдателей
}


////Промежуточный итог
var dep = new Dep()

var price = 5
var quantity = 2
var total = 0
var target = () => { total = price * quantity }
dep.depend(target) // добавим функцию target в число подписчиков
target() // запустим функцию чтобы посчитать total

console.log(total) // 10 - верное число
price = 20
console.log(total) // 10 - это уже не то, что нам надо
dep.notify() // запустим функции - подписчики
console.log(total) // 40 - теперь всё правильно


////Дорабатываем работу с target -> watcher

function watcher(func){
  var target = func;
  dep.depend(); //убираем аргументы
  target();
  target = null;
}

watcher(() => {
  total = price * quantity;
})

//variable -> property object
var data = {
  price: 5,
  quantity: 2
}

//доработка класса и итоговая версия

function Dep(){
  this.subscribers = [];
}

Dep.target = null;

Dep.prototype.depend = function(){ // обращаемся к переменной target
  if (Dep.target && !this.subscribers.includes(Dep.target)){
      this.subscribers.push(Dep.target)
  }
}

Dep.prototype.notify = function(){
  this.subscribers.forEach(sub => sub())
}

//делаем свойства реактивными
function defineReactive(obj){
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]

    // С каждым свойством будет связан собственный
    // экземпляр класса Dep
    const dep = new Dep()

    Object.defineProperty(obj, key, {
        get() {
            debugger;
            dep.depend() // запоминаем выполняемую функцию target
            return internalValue
        },
        set(newVal) {
            debugger;
            internalValue = newVal
            dep.notify() // повторно выполняем сохранённые функции
        }
    })
  })
}

//watcher

function watcher(func){
  debugger;
  Dep.target = func;
  //dep.depend();
  Dep.target();
  Dep.target = null;
}

watcher(() => {
  data.total = data.price * data.quantity;
})
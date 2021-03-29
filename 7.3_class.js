class People {
  constructor(Name = 'Vasya') {
    this.Name = Name;
    this.Age = 10;
  }
}


//Наследование
class Main extends People{
  constructor(Name){
    super(Name);
  }
}

//Методы

class People {
  constructor() {
    this.name = 'Vasya';
  }

  f1(){
    return 'f1'
  }

  static f1(){
    return 'static f1'
  }

  ['name' + 'F'](){
    return 'Calc function';
  }
}

//getter | setter

class People {
  constructor() {
    this.firstName = 'Vasya';
    this.lastName = 'Pupkin';
  }

  get FullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  set FullName(val){
    [this.firstName, this.lastName] = val.split(' ')
  }
}
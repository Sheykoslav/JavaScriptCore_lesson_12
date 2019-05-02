function show(data){
  console.log(data);
}
function Person(){
  this.pers1 = {name:'Anton',age:25};
  this.pers2 = {name:'Oksana',age:17};
  this.pers3 = {name:'Pavlo',age:30};
  this.pers4 = {name:'Vlad',age:61};
  this.pers5 = {name:'Sofia',age:21};
  this.getPers1 = function(){
    return this.pers1;
  }
  this.getPers2 = function(){
    return this.pers2;
  }
  this.getPers3 = function(){
    return this.pers3;
  }
  this.getPers4 = function(){
    return this.pers4;
  }
  this.getPers5 = function(){
    return this.pers5;
  }
}
let p = new Person();

let map = new Map();
map
  .set(1,p.getPers1())
  .set(2,p.getPers2())
  .set(3,p.getPers3())
  .set(4,p.getPers4())
  .set(5,p.getPers5());
function outputMapValues(yourMap){
  for(let value of yourMap.values()){
    show('name: '+value.name+', age: '+value.age);
  }
}
outputMapValues(map);

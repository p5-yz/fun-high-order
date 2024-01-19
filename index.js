function identity(arg) {
  return arg;
}

function identityF(arg) {
  return () => arg;
}

function add(a, b) {
  return a + b;
  
}

function subtract(a, b) {
  return a -  b;
  
}

function multiply(a, b) {
  return a * b;
}

function increment(num) {
  return num + 1; 
}

function addF(num) {
  return (secNum) => num + secNum;
}


function curry(fun, num) {
  return (secondArg) => fun(num, secondArg);
}

function liftF(fun) {
  return (arg1) => (arg2) => fun(arg1, arg2) 
}
//restricted to invoking func once
function once(func) {
  //func should only be called once
  let called = true;
  let t;
  if(called === true) {
    called = false;
     func(this, )
  }
}
let count = 0;
function createApplication () {
return count + 1;
}
var initialize = once(createApplication);
initialize();

console.log(initialize());
console.log(initialize());
function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};

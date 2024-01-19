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
  function before(n, func){
    let result
    return function(){
      if (--n > 0) {
        result = func()
      }
      if (n <= 1) {
        func = undefined
      }
      return result
    }
  }
  return before (2, func)
}

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
  once,
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

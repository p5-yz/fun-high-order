function identity(arg) {
  return arg;
}

function identityF(arg) {
  return () => arg;
}

function add(a, b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function increment(num) {
  return num += 1;
}

function addF(num) {
  return (secNum) => num + secNum;
}

function curry(func, arg2) {
  return (arg1) => func(arg1, arg2);

}

function liftF(func) {
  return (arg1) => (arg2) => func(arg1, arg2);
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

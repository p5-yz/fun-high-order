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
  //  (arg1) => fun(arg1, arg2)  // arrow form
  //  function (arg1) {          // standard form
  //   return fun(arg1, arg2)  
  //  }
}
// /*
//   const add = (a, b) => a + b;
//   const addF = liftF(add);
//   const add3 = addF(3);
//   const result = add3(4);
//   console.log(result); // 7
// */
// function liftF(fun) {
//   return function (arg1){ // addF
//     return function (arg2) {// add3
//       return fun(arg1, arg2) // resuly
//     } 
//   }  
// }

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


function twice(func) {
  return function (num){
    return func(num, num)
  }    
}

// double(square(5)) ==> 50
// square(double(5)) ==> 100

function composeU(func1, func2) {
  return function (x){
      return func2(func1(x))
  }    
}

/* 
  Write a function composeB that takes two binary functions and 
  returns a function that calls them both. The return value of 
  the first function will get passed as the first argument to 
  the second one.

  multiply(add(2, 3), 7); // 35
  composeB(add, multiply)(2, 3, 7); // 35

  func1 = add, func2 = multiply

  x = 2, y = 3, z = 7 

  function composeB(add, multiply){
    return function (x, y, z){
        return multiply(add(x, y), z)
    }
}   

*/
function composeB(func1, func2){
  return function (x, y, z){
      return func2(func1(x, y), z)
  }
}    

function limit(func, num) {
  return function (x, y){
    if (--num >= 0){
      return func(x ,y)
    }
  }
}

function from(num) {
  return function(){
    return num++
  }
}

function to(genFunc, end) {
  let count = genFunc() - 1
  let endCount = end - count 
  return function(){
    if(--endCount > 0){
      count++
      return count
    }
  }
}
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

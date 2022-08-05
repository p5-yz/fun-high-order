const hof = {};

hof.identity = function (x) {
  return x;
};

hof.identityF = function (x) {
  const innerFunc = () => x;
  return innerFunc;
};

hof.add = function (x, y) {
  return x + y;
};

hof.subtract = function (x, y) {
  return x - y;
};

hof.multiply = function (x, y) {
  return x * y;
};

hof.increment = function (x) {
  return hof.add(x, 1);
};

hof.addF = function (x) {
  function innerFunc(y) {
    return x + y;
  }

  return innerFunc;
};

hof.curry = function (func, ...nums) {
  function innerFunc(x) {
    return func(num, x);
  }
  return innerFunc;
};

// hof.curry = function (func, num) {
//     function innerFunc(x) {
//       return func(num, x);
//     }
//     return innerFunc;
//   };

hof.liftF = function (func) {
  function innerFunc(x) {
    function innerInnerFunc(y) {
      return func(x, y);
    }

    return innerInnerFunc;
  }
  return innerFunc;
};

hof.twice = function (binaryFunc) {
  function innerFunc(x) {
    return binaryFunc(x, x);
  }

  return innerFunc;
};

hof.once = function (func) {
  let counterB = 0;

  function innerFunc() {
    if (counterB === 0) {
      func();
    }
    counterB++;
  }

  return innerFunc;
};
///////////////////////////////////

// hof.doNTimes = function (func, n) {

//     let counterB = 0;
//     function innerFunc() {
//         counterB ++;
//         if (counterB > n) {
//             return null;
//         } else {
//             return func();
//         };
//     };
//     return innerFunc;
// }

//////////////////////////////////////
hof.composeU = function (func1, func2) {
  const innerFunc = (x) => func2(func1(x));
  return innerFunc;
};

hof.composeB = function (func1, func2) {
  const innerFunc = (a, b, c) => {
    return func2(c, func1(a, b));
  };
  return innerFunc;
};

hof.limit = function (func1, limit1) {
  let counter1 = 0;
  const innerFunc = (...x) => {
    if (counter1 < limit1) {
      counter1++;
      return func1(...x);
    }
    return undefined;
  };
  return innerFunc;
};

hof.from = function (someInteger) {
  let counter = -1;
  return (innerFunc = () => {
    counter++;
    return someInteger + counter;
  });
};

hof.to = function (func1, limit) {
  let counter = func1();
  return (innerFunc = () => {
    if (counter < limit) {
      counter++;
      return counter - 1;
    }
    return undefined;
  });
};

hof.fromTo = function (from, to) {
  return (innerFunction = () => {
    if (from < to) {
      from++;
      return from - 1;
    }
    return undefined;
  });
};

hof.element = function (someArray, someFunc) {
  let noFunc = false;
  let counter = -1;
  if (!someFunc) {
    noFunc = true;
  }
  return (innerFunc = () => {
    if (noFunc) {
      counter++;
      return someArray[counter];
    }
    return someArray[someFunc()];
  });
};

hof.collect = function (func1, arr1) {
  return () => {
    let result = func1();
    if (result !== undefined) {
      arr1.push(result);
    }
    return result;
  };
};

hof.filter = function (genFunc, predFunc) {
  counter = 0;
  return () => {
    counter++;
    result = genFunc();
    if (predFunc(result)) {
      return result;
    }
  };
};





hof.concat = function (...funcs) {
  return () => {
    if (funcs.length === 0) {
        return undefined;
    }

    let result = undefined;

    for (let i = 0; i < funcs.length; i++) {
        let result2 = funcs[i]();
        if (result2 !== undefined) {
            result = result2;
            break
        }
    }

    return result;



    // let result = func1();
    // if (result !== undefined) {
    //   return result;
    // }
    // if (func2) {
    //   return func2();
    // }
  };
};




hof.fibonacciF = function (a, b) {
  const fibArr = [a, b];
  let counter = -1;
  return () => {
    counter++;
    if (fibArr.length < counter + 1) {
      fibArr.push(fibArr[counter - 2] + fibArr[counter - 1]);
    }
    return fibArr[counter];
  };
};

hof.genSymF = function (symbol) {
  let counter = -1;
  return () => {
    counter++;
    return symbol + counter.toString();
  };
};

hof.genSymFF = function (func1, seed) {
  return (symbol) => {
    let counter = seed;
    return () => {
      counter = func1(counter);
      return symbol + counter.toString();
    };
  };
};

hof.counter = function (num) {
  let ourObj = {};

  ourObj.up = () => {
    return ++num;
  };

  ourObj.down = () => {
    return --num;
  };

  return ourObj;
};

hof.revokable = function (someFunk) {
  const myObj = {};
  myObj.revoked = false;

  myObj.invoke = (a, b) => {
    return this.revoked ? undefined : someFunk(a, b);
  };

  myObj.revoke = () => {
    this.revoked = true;
  };

  return myObj;
};

module.exports = hof;

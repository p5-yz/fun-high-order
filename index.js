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
//how can we do this one without using 'this'


hof.addF = function (x) {

    function innerFunc(y) {
        return x + y;
    };

    return innerFunc;
};


hof.curry = function ( func, num  ) {

    function innerFunc(x) {
       return func( num , x)
    }; 
     
    return innerFunc;

};

hof.liftF = function ( func ) {

    function innerFunc( x ) {
        function innerInnerFunc( y ){
            return func(x , y)
        }

        return innerInnerFunc;
    }
    return innerFunc;
};


hof.twice = function ( binaryFunc ) {

    function innerFunc( x ) {
        return binaryFunc( x, x )
    }

    return innerFunc;
};

hof.once = function (func) {

    let firstResult = func();
    let counterB = 0;

    function innerFunc() {
        counterB ++;
        if (counterB > 1) {
            return firstResult;
        } else {
            return func();
        }
        
        // return func();

    };
    
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
hof.composeU = function () {};

hof.composeB = function () {};

hof.limit = function () {};

hof.from = function () {};

hof.to = function () {};

hof.fromTo = function () {};

hof.element = function () {};

hof.collect = function () {};

hof.filter = function () {};

hof.concat = function () {};

hof.fibonacciF = function () {};

hof.genSymF = function () {};

hof.genSymFF = function () {};

hof.counter = function () {};

hof.revokable = function () {};

module.exports = hof;

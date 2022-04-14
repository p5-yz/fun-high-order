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

    return this.add(x, 1);
};
//how can we do this one without using 'this'


hof.addF = function (x) {

    function innerFunc(y) {
        return x + y;
    };

    return innerFunc;
};

hof.curry = function () {};

hof.liftF = function () {};

hof.twice = function () {};

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

function increment(x) {
  
    function innerFunc() {
        x++;
        return x;
    }
    return innerFunc;
};



const newFunc = increment(2);
//newFunc = () => {return 2 + 1};

console.log(newFunc(newFunc()))
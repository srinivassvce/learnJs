function sum(x) {

    return function(y) {
        if(y === undefined) {
            return x;
        } else {
            return sum(x + y);
        }
    }
}

console.log(sum(1)(2)(3)(4)())
function flat(arr, returnArray) {
    arr.forEach(el => {
        if(Array.isArray(el)) {
            flat(el, returnArray);
        } else {
            returnArray.push(el);
        }
    });
    return returnArray;
}

const arr = [1, 2, [3], [4], [5], [6, 7], [8, 9]];
console.log(flat(arr, []));
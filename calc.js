const funAdd = (a, b) => {
    if(isNaN(a) || isNaN(b)) return false;
    if(Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat(a) + parseFloat(b);
    }
    return parseInt(a) + parseInt(b);
}


console.log(funAdd(3,5))
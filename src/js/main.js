function sum(a, b){
    return a - b;
}

function add(a,b) {
    if(isNaN(a) || isNaN(b)){
        return;
    }
    return a + b;
}

module.exports = add;

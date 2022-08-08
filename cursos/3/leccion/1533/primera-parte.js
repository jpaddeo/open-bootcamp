const suma = (a, b, c) => {
    if(!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        return a + b + c;
    }
    return false;
};

console.log(suma(50,50,1));
console.log(suma(50,1,1));
console.log(suma(50,2,1));
console.log(suma(50,3,1));
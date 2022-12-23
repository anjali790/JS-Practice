function x(p) {
    return function (q) {
        return function (r) {
            return p * q * r;
        }
    }
}
console.log(x(5)(6)(7));


function calculate(l, b, h) {
    return l * b * h;
}
console.log(calculate(2, 3, 4));
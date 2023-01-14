function multiply() {
    let cache = {};
    return function (num) {
        if (num in cache) {
            console.log(cache[num]);
        } else {
            cache[num] = 2 * num;
            console.log(cache[num]);
        }
    }
};

let mul = multiply();

let t1 = (performance.now())
mul(8);
let t2 = (performance.now());
console.log(t2 - t1);

let t3 = (performance.now());
mul(9);
let t4 = (performance.now());
console.log(t4 - t3);

let t5 = (performance.now());
mul(10);
let t6 = (performance.now());
console.log(t6 - t5);
//Generator:- Normal fn returns only one value, but generator returns multiple values.

function* generatorFun() {
    yield 1;
    yield 2;
    return 3;
}

//The main method of Generator is next(). The result of next() is always an object with two properties:-
//1. value
//2. done: true or false

let generator = generatorFun();

let one = generator.next();
alert(JSON.stringify(one))

let two = generator.next();
alert(JSON.stringify(two))

let three = generator.next();
alert(JSON.stringify(three))

//==================================================//
function* generatorFun2() {
    yield 1;
    yield 2;
    yield 3;
}

let generator2 = generatorFun2();

for (let value of generator2) {
    alert(value);
}

//==================================================//
function* generatorFun3() {
    yield 4;
    yield 5;
    yield 6;
}

let generator3 = [1, 2, 3, ...generatorFun3()];
alert(generator3)
//Generator:- Normal fn returns only one value, but generator returns multiple values.

function* generatorFun() {
    yield 1;
    yield 2;
    return 3;
}

//The main method of Generator is next(). It result of next() is always an object with two properties:-
//1. value
//2. done: true or false

let generator = generatorFun();

let one = generator.next();
alert(JSON.stringify(one))

let two = generator.next();
alert(JSON.stringify(two))

let three = generator.next();
alert(JSON.stringify(three))
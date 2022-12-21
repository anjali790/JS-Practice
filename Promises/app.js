let promise = new Promise((resolve, reject) => {
    // resolve(alert("done"));
    reject(new Error(alert("reject")));
});

//=============================================//
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() =>
        resolve("done"), 5000);
});

const whenResolved = () => {
    alert("hello")
}

const whenRejected = () => {
    alert("bye")
}

promise2.then(whenResolved, whenRejected);

console.log(promise2)
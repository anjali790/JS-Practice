//call:-
let obj = {
    name: "Aarav",
    // age: 23,
    college: function () {
        console.log(this.name);
    }
}

// obj.college();

let person = {
    name: "anjali",
}
console.log(obj.college.call(person));



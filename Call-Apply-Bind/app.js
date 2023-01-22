//call:-
let obj = {
    name: "Aarav",
    age: 23,
    college: function () {
        console.log(this.name);
    }
}

// obj.college();

let person = {
    name: "anjali",
}
console.log(obj.college.call(person));


//apply:-
let createPerson = {
    name: "Anjali",
    age: 23,
}

function display(place) {
    console.log(this.name, place);
}

display.apply(createPerson,["Delhi"])
function obj(name, branch, college) {
    this.name = name;
    this.branch = branch;
    this.college = college;
}

let person = new obj("Anjali", "EE", "KEC");
console.log(person);

class obj2 {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
}

let person2 = new obj2("Aarav", "CS", "KEC");
console.log(person2);
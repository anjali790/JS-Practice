let obj = {
    name: "Anjali",
    branch: "EE",
    college:{
        name: "KEC",
        place:"Ghaziabad",
    }
}

// console.log(obj);
let copy = {...obj}
obj['name'] = "Aarav";
console.log(obj, copy);

obj['college']['name'] = 'KIT';
console.log(obj, copy);
let obj = {
    name: "Anjali",
    branch: "EE",
    college:{
        name: "KEC",
        place:"Ghaziabad",
    }
}

let copy = JSON.stringify(obj);
let copied = JSON.parse(copy);

copied['college']['name'] = 'KIT';

console.log(obj, copied);
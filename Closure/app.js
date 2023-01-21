function fname(){
    let name = "Anjali"
    return function (){
        console.log(name)
    }
}
let result = fname()
result()
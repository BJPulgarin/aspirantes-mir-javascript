function join(arrayVar){
    let text=""
    for(let i=0; i<arrayVar.length; i++){
        text = text + arrayVar[i] + " "
    }
    return text
}

console.log(join(["e", "s", "t", "o", " ", "e", "s", " ", "u", "n", " ", "a", "r", "r", "a", "y"]))
console.log(join([1, 2, 3, 4, 5]))
console.log(join([]))
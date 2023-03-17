function sum(arrayNum){
    let result=0
    for (let i=0; i<arrayNum.length; i++){
        result+=arrayNum[i]
    }
    return result
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

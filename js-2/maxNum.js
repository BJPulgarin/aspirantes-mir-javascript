function max(arrayNum){
    let maxNum=arrayNum[0]
    for(let i=1; i<arrayNum.length; i++){
        if (arrayNum[i]>maxNum){
            maxNum=arrayNum[i]
        }
    }
    return maxNum
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
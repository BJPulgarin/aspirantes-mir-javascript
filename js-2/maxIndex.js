function maxIndex(arrayNum){
    let maxIndex=0
    if (arrayNum.length===0){
        maxIndex=-1
    }
    else{
        let maxNum=arrayNum[0]
        for(let i=1; i<arrayNum.length; i++){
            if (arrayNum[i]>maxNum){
                maxIndex=i
                maxNum=arrayNum[i]
            }
        }
    }
    return maxIndex
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
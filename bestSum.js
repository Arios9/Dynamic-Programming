function bestSum(sum, list, combination=[]){
    if (sum==0) return combination ;
    if (sum<0) return null;

    let bestCombination = null;
    for(let number of list){
        let result = bestSum(sum - number, list, combination.concat(number));
        if(bestCombination === null || (result !== null && result.length < bestCombination.length))
        bestCombination = result;
    }
    return bestCombination;
}

console.log(memobestSum(8 , [3,5,2]))

function memobestSum(sum, list, combination=[], memo=[]){
    if (memo.includes(sum)) return null;
    if (sum==0) return combination ;
    if (sum<0) return null;

    let bestCombination = null;
    for(let number of list){
        let result = memobestSum(sum - number, list, combination.concat(number), memo);
        if(bestCombination === null || (result !== null && result.length < bestCombination.length))
        bestCombination = result;
    }
    if(bestCombination === null) memo.push(sum);
    return bestCombination;
}


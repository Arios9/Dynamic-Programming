

function howSum(sum, list, array=[]){
    if (sum==0) return array;
    if (sum<0) return null;

    for(let number of list){
        let result = howSum(sum - number, list, array.concat(number));
        if (result !== null) return result;
    }

    return null;
}

function memohowSum(sum, list, array=[], memo=[]){
    if (memo.includes(sum)) return null;
    if (sum==0) return array;
    if (sum<0) return null;

    for(let number of list){
        let result = memohowSum(sum - number, list, array.concat(number), memo);
        if (result !== null) return result;
    }
    memo.push(sum);
    return null;
}



console.log(memohowSum(300 , [14,7,1]))
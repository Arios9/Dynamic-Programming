
function canSum(sum, list){
    if(sum==0) return true;
    if(sum<0) return false;

    for(let number of list)
        if (canSum(sum - number, list))
            return true;
    
    return false;
}

function memocanSum(sum, list ,memo=[]){
    if (memo.includes(sum)) return false;
    if(sum==0) return true;
    if(sum<0) return false;

    for(let number of list){
        let result=memocanSum(sum - number, list, memo);
        if (result) return true;
    }
    memo.push(sum);
    return false;
}

console.log(memocanSum(100 , [14,7]))

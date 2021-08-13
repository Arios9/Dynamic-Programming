

function canConstruct(target, list, combination=""){
    if(target === combination) return true;

    for(let word of list){
        let newCombination = combination.concat(word);
        if(target.includes(newCombination, 0)){
            if(canConstruct(target, list, newCombination))
            return true;
        }
    }

    return false;
}

function memocanConstruct(target, list, combination="", memo=[]){

    if (memo.includes(combination)) return false;
    if(target === combination) return true;

    for(let word of list){
        let newCombination = combination.concat(word);
        if(target.includes(newCombination, 0)){
            if(memocanConstruct(target, list, newCombination, memo))
            return true;
        }
    }

    memo.push(combination);
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(memocanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))

function allConstruct(target, list, combination=[]){

    let combinationString = combination.join('');

    if(!target.includes(combinationString, 0)) return [];
    if(target === combinationString) return [combination];

    let solutions = [];

    for(let word of list)
        solutions = solutions.concat(allConstruct(target, list, combination.concat(word)));

    return solutions;
}

function memoallConstruct(target, list, combination=[], memo=[]){

    let combinationString = combination.join('');

    if(!target.includes(combinationString)) return [];
    if(memo.includes(combinationString)) return [];
    if(target === combinationString) return [combination];

    let solutions = [];

    for(let word of list)
        solutions = solutions.concat(memoallConstruct(target, list, combination.concat(word), memo));

    if(solutions.length === 0) memo.push(combinationString);

    return solutions;
}



console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(memoallConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"
, ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))
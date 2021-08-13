function countConstruct(target, list, combination=""){
    if(!target.includes(combination, 0)) return 0;
    if(target === combination) return 1;

    let count = 0;
    for(let word of list)
            count += countConstruct(target, list, combination.concat(word));

    return count;
}

function memocountConstruct(target, list, combination="", memo=[]){
    if(!target.includes(combination, 0)) return 0;
    if (memo.includes(combination)) return 0;
    if(target === combination) return 1;

    let count = 0;

    for(let word of list)
        count += memocountConstruct(target, list, combination.concat(word), memo);

    if (count == 0) memo.push(combination)
    return count;
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purple"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(memocountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"
, ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))
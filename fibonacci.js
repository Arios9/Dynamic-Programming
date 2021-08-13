


function fibo(n){
    if (n<2) return n;
    return fibo(n-1) + fibo(n-2);
}

function fibomemo(n, memo={}){
    if (n in memo) return memo[n];
    if (n<2) return n;
    memo[n] = fibomemo(n-1, memo) + fibomemo(n-2, memo);
    return memo[n];
}

function fibonacci(n){
    let x = 0, y = 1;
    for(let i=0; i<n; i++){
        let temp = x;
        x = y;
        y += temp;
    }
    return x;
}

console.log(fibonacci(51))


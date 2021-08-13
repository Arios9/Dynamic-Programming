function routes(x,y){
    if(x==0||y==0) return 0;
    if(x==1||y==1) return 1;
    return routes(x-1, y)+routes(x, y-1);
}

function routesmemo(x,y, memo={}){
    if(x==0||y==0) return 0;
    if(x==1||y==1) return 1;
    let key = Math.min(x,y)+','+Math.max(x,y);
    if (key in memo) return memo[key];
    memo[key] = routesmemo(x-1, y, memo) + routesmemo(x, y-1, memo);
    return memo[key];
}




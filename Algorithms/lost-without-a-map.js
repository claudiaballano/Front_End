let x = [1, 2, 3];

function maps(x){
    
    let doubled = [];
    
    for(let i = 0; i < x.length; i++){
        doubled.push(x[i] * 2);
    }
    
    return doubled;
}

console.log(maps(x));

/**
let x = [1, 2, 3];

function maps(x){
    return x.map(num => num * 2);
}

console.log(maps(x)); */

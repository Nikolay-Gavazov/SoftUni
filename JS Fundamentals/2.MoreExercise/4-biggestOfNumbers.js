function biggestOfNumbers(a, b, c){

    if(a >= b && b >= c){
        [a, b, c] = [a, b , c];
    }else if(a <= b && b <= c){
        [a, b, c] = [c, b, a];
    }else if(a <= c && c <= b){
        [a, b, c] = [b, c, a];
    }else if(a >= c && c >= b){
        [a, b, c] = [a, c, b];
    }else if(c >= a && a >= b){
        [a, b, c] = [c, a, b]
    }else if(b >= a && a >= c){
        [a, b, c] = [b, a, c]
    }

    console.log(a);

}
biggestOfNumbers(43,

    43.2,
    
    43.1)
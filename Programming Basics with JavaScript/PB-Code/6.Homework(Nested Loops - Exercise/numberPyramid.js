function numberPyramid(input) {
    let n = Number(input[0]);

    let res = "";
    let stop = false;
    let num = 1;

    for(let x = 1; x <= n; x++){
        for(let y = 1; y <= x; y++){
            if(num > n){
                stop = true;
                break;
            }
            res += `${num} ` 
            num++
        }
        
            console.log(res);
            res = "";
        if(stop){
            break;
        }
        
    }
}
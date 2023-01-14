// Input.
let input = [
    '02:00 АM',


];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
//След тази задача е време за по една бира? ;) 

let time = gets();
let beerTime;


if  (time.length === 7){

if (time[5] === 'P'){

    if( time[0]>=1 && time[0]<=9 ){
        beerTime = 'beer time';
    }else {  
        beerTime = 'non-beer time';
        
    }
}else if ((time[5] === 'A')){
    if( time[0]>=0 && time[0]<=2 ){
        beerTime = 'beer time';
        }else{ 
        beerTime = 'non-beer time';
        
}
}
}


if  (time.length === 8){

    if (time[6] === 'P'){
    
        if( time[0]>=1 && time[1] >=0 && time[1] <=2 ){
            beerTime = 'beer time'
        }else{ 
            beerTime = 'non-beer time'
            
        }
    }else if ((time[6] === 'A')){
        if( time[0]>=0 && time[0]<=3  ){
            beerTime = 'non-beer time'
        }else{ 
            beerTime = 'beer time'
            
    }
    }
    
    }
    
print(beerTime);
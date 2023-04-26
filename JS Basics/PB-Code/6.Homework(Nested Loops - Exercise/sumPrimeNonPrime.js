function sumPrimeNonPrime(input) {
    let index = 0;

    let comand = input[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;
    

    while(comand !== "stop"){
        let currentNum = Number(comand);

        if(currentNum < 0){
            console.log("Number is negative.");
            comand = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for(let i = 2; i < currentNum; i++){
            if(currentNum % i === 0){
                sumNonPrime += currentNum;
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            sumPrime += currentNum;
        }
        comand = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",
'2',

"stop"])
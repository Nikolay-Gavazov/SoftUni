function walking(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let target = 10000;
    let steps = 0;
    while (comand !== 'Going home') {
        steps += Number(comand);
        if(steps >= target){
            break;
        }
        comand = input[index];
        index++;
    }

    if(comand === 'Going home'){
        comand = input[index];
        steps += Number(comand);
    }
    let diff = Math.abs(steps - target);

    if(steps < target){
        console.log(`${diff} more steps to reach goal.`);
    }else{
        console.log('Goal reached! Good job!');
        console.log(`${diff} steps over the goal!`);
    }
}
walking(["1000",

"1500",

"2000",

"6500"])
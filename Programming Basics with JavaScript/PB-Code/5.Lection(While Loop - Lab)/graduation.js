function graduation(input) {
    let index = 0;
    let name = input[index];

    let grades = 1;
    let sum = 0;
    let excluded = 0;
    
    while (grades <= 12) {
        index++;
        let currentGrade = Number(input[index]);
        
        if(currentGrade >= 4){
            grades++;
            sum += currentGrade;
        }else {
            excluded++;
            break;
        }
    }

    let averageGrade = sum / 12;

    if(excluded >= 1){
        console.log(`${name} has been excluded at ${grades} grade`);
    }else{
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])
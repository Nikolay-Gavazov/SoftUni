function examPreparation(input) {
    let index = 0;
    let poorGrades = Number(input[index]);
    index++;

    let exercise = input[index];
    index++;

    let grade = Number(input[index]);
    index++;
    let score = 0;
    let exerciseCounter = 0;
    let poorGradesCounter = 0;
    let lastExercise = '';

    while (exercise !== 'Enough') {
        score += grade;
        exerciseCounter++;
        lastExercise = exercise;
        if(grade <= 4){
            poorGradesCounter++;
        }
        if(poorGradesCounter === poorGrades){
            break;
        }
        exercise = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }
    let avgScore = score / exerciseCounter;

    if(poorGradesCounter === poorGrades){
        console.log(`You need a break, ${poorGradesCounter} poor grades.`);
    }else{
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${exerciseCounter}`);
        console.log(`Last problem: ${lastExercise}`);
    }
}
examPreparation(["2",

"Income","3","Game Info","6","Best Player","4"])
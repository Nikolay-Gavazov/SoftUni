function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]);
    index++;

    let comand = input[index];
    index++;
    let finalGrade = 0;
    let presCount = 0;
    while (comand !== 'Finish') {
        let presentation = comand;
        presCount++;

        let tempSumGrade = 0;
        for (let i = 0; i < jury; i++) {
            let grade = Number(input[index]);
            index++;
            tempSumGrade += grade;
        }
        let avgGrade = tempSumGrade / jury;
        finalGrade += avgGrade;

        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);

        comand = input[index];
        index++;
    }
    let avgFinalGrade = finalGrade / presCount;
    console.log(`Student's final assessment is ${avgFinalGrade.toFixed(2)}.`);
} trainTheTrainers(["2",

    "While-Loop",

    "6.00",

    "5.50",

    "For-Loop",

    "5.84",

    "5.66",

    "Finish"])
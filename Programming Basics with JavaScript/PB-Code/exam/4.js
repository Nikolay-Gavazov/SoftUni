function grades(input) {
    let students = Number(input[0]);

    let grade = 0;
    let gradesCounter = 0;

    let top = 0;
    let good = 0;
    let middle = 0;
    let fail = 0;

    for(let i = 1; i <= students; i++){
        grade = Number(input[i]);
        if(grade < 3){
            fail++
            gradesCounter += grade;
        }else if(grade >= 3 && grade < 4){
            middle++;
            gradesCounter += grade;
        }else if( grade >= 4 && grade < 5){
            good++;
            gradesCounter += grade; 
        }else{
            top++;
            gradesCounter += grade;
        }
    }

    let avgGrade = gradesCounter / students;
    let avgTop = (top / students) * 100;
    let avgGood = (good / students) * 100;
    let avgMiddle = (middle / students) * 100;
    let avgFail = (fail / students) * 100;

    console.log(`Top students: ${avgTop.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${avgGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${avgMiddle.toFixed(2)}%`);
    console.log(`Fail: ${avgFail.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}
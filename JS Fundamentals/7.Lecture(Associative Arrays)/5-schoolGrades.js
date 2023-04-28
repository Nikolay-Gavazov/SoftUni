function schoolGrades(input) {

    let grades = {};

    input.forEach(el => {
        let line = el.split(' ')
        let name = line.shift();
        let schoolGrades = line.map(Number);

        if (!(grades.hasOwnProperty(name))) {
            grades[name] = schoolGrades;
        } else {
            schoolGrades.forEach(el => {
                grades[name].push(el);
            });

        }
    });

    let result = Object.entries(grades);

    result.sort((a, b) => a[0].localeCompare(b[0]));

    result.forEach(el => {
        let grade = 0;
        let grades = el[1];
        for (let i = 0; i < grades.length; i++) {
            grade += Number(grades[i]);
        }
        grade /= grades.length;
        console.log(`${el[0]}: ${grade.toFixed(2)}`);
    });

}
schoolGrades(['Steven 5',

'George 3',

'Steven 6',

'Steven 5',

'Tammy 2 5 3',

'Steven 4'])
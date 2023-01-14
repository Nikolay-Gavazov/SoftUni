function softUniReception(input) {

    const employeesAnswerPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let students = Number(input[3]);

    let hoursNeeded = 0;

    while (students > 0) {
        hoursNeeded++
        if (hoursNeeded % 4 == 0 && hoursNeeded > 0) {


        } else {

            students -= employeesAnswerPerHour;
        }
    }

    console.log(`Time needed: ${hoursNeeded}h.`);

}
softUniReception(['3', '2', '5', '40'])
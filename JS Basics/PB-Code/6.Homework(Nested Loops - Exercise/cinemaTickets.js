function cinemaTickets(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let student = 0;
    let standard = 0;
    let kid = 0;


    while (comand !== 'Finish') {
        let ticketCounter = 0;
        let movie = comand;
        comand = input[index];
        index++;

        let freeSpace = Number(comand);
        comand = input[index];
        index++;

        while (comand !== 'End' && comand !== 'Finish') {
            ticketCounter++;
            let ticket = comand;

            switch (ticket) {
                case 'student':
                    student++;
                    break;
                case 'standard':
                    standard++;
                    break;
                case 'kid':
                    kid++;
                    break;
            }

            if(freeSpace == ticketCounter){
                break;
            }

            comand = input[index];
            index++;
        }

        let usedSpace = ticketCounter / freeSpace * 100;
        console.log(`${movie} - ${usedSpace.toFixed(2)}% full.`);
        if (comand === 'Finish') {
            break;
        }
        comand = input[index];
        index++;

    }
    let totalTickets = standard + student + kid;
    console.log(`Total tickets: ${totalTickets}`);

    let avgStudent = student / totalTickets * 100;
    let avgStandard = standard / totalTickets * 100;
    let avgKid = kid / totalTickets * 100;
    console.log(`${avgStudent.toFixed(2)}% student tickets.`);
    console.log(`${avgStandard.toFixed(2)}% standard tickets.`);
    console.log(`${avgKid.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])
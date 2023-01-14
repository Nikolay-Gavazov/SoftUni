function vacationBooksList(input) {
    let totalPageNum = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let timeToReadTheBook = totalPageNum / pagesForHour ;
    let hoursPerDay = timeToReadTheBook / daysToRead ;
    console.log(hoursPerDay);
}
vacationBooksList(["432 ",

"15 ",

"4 "]);
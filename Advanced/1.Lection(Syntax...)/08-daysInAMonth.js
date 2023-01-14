function daysInAMonth(month, year){

    return new Date(year, month, 0).getDate();

}
daysInAMonth(2, 2013)
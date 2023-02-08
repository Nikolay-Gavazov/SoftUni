function tickets(arr, sorting){
class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
const ticketsArr = [];
    arr.forEach(el => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        const ticket = new Ticket(destination, price, status)
        ticketsArr.push(ticket);
    });
    let sorted = [];
    if(sorting == 'destination'){
        sorted = ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination))
    }else if(sorting == 'status'){
        sorted = ticketsArr.sort((a, b) => a.status.localeCompare(b.status))
    }

    console.log(sorted);
}
tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'status')
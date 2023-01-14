let input = [
    '12:26 PM'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let time = gets();
let hoursEndingIndex = 0;

if (time.length === 7) {
    hoursEndingIndex = 1;
} else {
    hoursEndingIndex = 2;
}

let hours = Number(time.substring(0,hoursEndingIndex));
let minutes = Number(time.substring(hoursEndingIndex + 1, hoursEndingIndex + 3));
let partOfTheDay = time.substring(hoursEndingIndex + 4);

if ((partOfTheDay === 'PM' && hours >= 1) || (partOfTheDay === 'AM' && hours < 3)) {
    print(`beer time`);
} else {
    print(`non-beer time`);
}
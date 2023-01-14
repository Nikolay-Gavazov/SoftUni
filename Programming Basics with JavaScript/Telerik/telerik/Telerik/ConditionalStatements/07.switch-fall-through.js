let input = [
  '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month = +gets();

console.log('Remaining months to the end of the year:')
switch (month) {
  case 1:
    console.log('January');
  case 2:
    console.log('February');
  case 3:
    console.log('March');
  case 4:
    console.log('April');
  case 5:
    console.log('May');
  case 6:
    console.log('June');
  case 7:
    console.log('July');
  case 8:
    console.log('August');
  case 9:
    console.log('September');
  case 10:
    console.log('October');
  case 11:
    console.log('November');
  case 12:
    console.log('December');

  default:
    break;
}